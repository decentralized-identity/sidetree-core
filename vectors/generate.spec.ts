import * as fs from 'fs';
import * as jwkEs256k1Private from './inputs/jwkEs256k1Private.json';
import * as jwkEs256k1Public from './inputs/jwkEs256k1Public.json';
import * as jwkEs256k2Private from './inputs/jwkEs256k2Private.json';
import * as jwkEs256k2Public from './inputs/jwkEs256k2Public.json';
import * as path from 'path';
import * as publicKeyModel1 from './inputs/publicKeyModel1.json';
import * as service1 from './inputs/service1.json';
import OperationGenerator from '../generators/OperationGenerator';

const OVERWRITE_TEST_VECTORS = false;

describe('Test Vectors', () => {
  let fixture: any = {};
  let updateOperationData: any;
  let recoverOperationData: any;
  let deactivateOperationData: any;

  it('can generate create', async () => {
    const recoveryKey = jwkEs256k1Public;
    const updateKey = jwkEs256k2Public;
    const otherKeys = [publicKeyModel1 as any];
    const services = [service1];
    const operationRequest = await OperationGenerator.createCreateOperationRequest(recoveryKey, updateKey, otherKeys, services);
    const did = await OperationGenerator.createDid(recoveryKey, updateKey, operationRequest.delta.patches);
    fixture = {
      ...fixture,
      create: {
        ...did,
        operationRequest
      }
    };
    // here is where you would assert that
    // no breaking changes have occurred for create operations
    // if test vector generation was deterministic
  });

  it('can generate update', async () => {
    updateOperationData = await OperationGenerator.generateUpdateOperation(
      fixture.create.didUniqueSuffix,
      jwkEs256k2Public,
      jwkEs256k2Private
    );
    const fixtureData = { ...updateOperationData } as any;
    // TODO: fix operation data structures so stuff like this is not required
    // to get consistent references to request objects.
    fixtureData.operationRequest = JSON.parse(fixtureData.updateOperation.operationBuffer.toString());
    delete fixtureData.updateOperation.operationBuffer;
    delete fixtureData.operationBuffer;
    fixture = {
      ...fixture,
      update: fixtureData
    };
    // here is where you would assert that
    // no breaking changes have occurred for update operations
    // if test vector generation was deterministic
  });

  it('can generate recover', async () => {
    const input = {
      didUniqueSuffix: fixture.create.didUniqueSuffix,
      recoveryPrivateKey: jwkEs256k1Private
    };
    recoverOperationData = await OperationGenerator.generateRecoverOperation(input);
    const fixtureData = { ...recoverOperationData } as any;
    // TODO: fix operation data structures so stuff like this is not required
    // to get consistent references to request objects.
    fixtureData.operationRequest = JSON.parse(fixtureData.recoverOperation.operationBuffer.toString());
    delete fixtureData.recoverOperation.operationBuffer;
    delete fixtureData.operationBuffer;
    fixture = {
      ...fixture,
      recover: fixtureData
    };
    // here is where you would assert that
    // no breaking changes have occurred for recover operations
    // if test vector generation was deterministic
  });

  it('can generate deactivate', async () => {
    deactivateOperationData = await OperationGenerator.createDeactivateOperation(
      fixture.create.didUniqueSuffix,
      recoverOperationData.recoveryPrivateKey
    );
    const fixtureData = { ...deactivateOperationData } as any;
    // TODO: fix operation data structures so stuff like this is not required
    // to get consistent references to request objects.
    fixtureData.operationRequest = JSON.parse(fixtureData.deactivateOperation.operationBuffer.toString());
    delete fixtureData.deactivateOperation.operationBuffer;
    delete fixtureData.operationBuffer;
    fixture = {
      ...fixture,
      deactivate: fixtureData
    };
    // here is where you would assert that
    // no breaking changes have occurred for deactivate operations
    // if test vector generation was deterministic
  });

  it('should write fixture to disk', async () => {
    if (OVERWRITE_TEST_VECTORS) {
      fs.writeFileSync(path.resolve(__dirname, '../../../tests/vectors/generated.json'), JSON.stringify(fixture, null, 2));
    }
  });
});
