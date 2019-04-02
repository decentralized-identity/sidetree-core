import { Config } from './Config';
import { Operation } from './Operation';
import { MongoDbOperationStore } from './MongoDbOperationStore';

/**
 * An abstraction of a complete store for operations exposing methods to
 * put and get operations.
 */
export interface OperationStore {

  /**
   * Initialize the operation store. This method
   * is called once before any of the operations below.
   */
  initialize (): Promise<void>;

  /**
   * Store an operation.
   */
  put (operation: Operation): Promise<void>;

  /**
   * Store a batch of operations
   */
  putBatch (operations: Array<Operation>): Promise<void>;

  /**
   * Get an iterator that returns all operations with a given
   * didUniqueSuffix ordered by (transactionNumber, operationIndex)
   * ascending.
   */
  get (didUniqueSuffix: string): Promise<Iterable<Operation>>;

  /**
   * Delete all operations with transaction number greater than the
   * provided parameter.
   */
  delete (transactionNumber?: number): Promise<void>;

}

/**
 * Factory function to create an operation store
 */
export function createOperationStore (config: Config): OperationStore {
  return new MongoDbOperationStore(config);
}
