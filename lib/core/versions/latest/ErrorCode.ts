/**
 * Error codes used ONLY by this version of the protocol.
 */
export default {
  AnchoredDataIncorrectFormat: 'anchored_data_incorrect_format',
  AnchoredDataNumberOfOperationsGreaterThanMax: 'anchored_data_number_of_operations_greater_than_max',
  AnchoredDataNumberOfOperationsLessThanZero: 'anchored_data_number_of_operations_less_than_zero',
  AnchoredDataNumberOfOperationsNotFourBytes: 'anchored_data_number_of_operations_not_four_bytes',
  AnchoredDataNumberOfOperationsNotInteger: 'anchored_data_number_of_operations_not_integer',
  AnchorFileBatchFileHashMissing: 'anchor_file_batch_file_hash_missing',
  AnchorFileBatchFileHashNotString: 'anchor_file_batch_file_hash_not_string',
  AnchorFileBatchFileHashUnsupported: 'anchor_file_batch_file_hash_unsupported',
  AnchorFileDecompressionFailure: 'anchor_file_decompression_failed',
  AnchorFileDidUniqueSuffixEntryNotString: 'anchor_file_did_unique_suffix_entry_not_string',
  AnchorFileDidUniqueSuffixesHasDuplicates: 'anchor_file_did_unique_suffixes_has_duplicates',
  AnchorFileDidUniqueSuffixesMissing: 'anchor_file_did_unique_suffixes_missing',
  AnchorFileDidUniqueSuffixesNotArray: 'anchor_file_did_unique_suffixes_not_array',
  AnchorFileDidUniqueSuffixTooLong: 'anchor_file_did_unique_suffix_too_long',
  AnchorFileExceededMaxOperationCount: 'anchor_file_exceeded_max_operation_count',
  AnchorFileHasUnknownProperty: 'anchor_file_has_unknown_property',
  AnchorFileNotJson: 'anchor_file_not_json',
  BatchWriterAlreadyHasOperationForDid: 'batch_writer_already_has_operation_for_did',
  DidEncodedDidDocumentHashMismatch: 'did_encoded_did_document_hash_mismatch',
  DidIncorrectPrefix: 'did_incorrect_prefix',
  DidLongFormOnlyInitialValuesParameterIsAllowed: 'did_long_form_only_initial_values_parameter_is_allowed',
  DidNoUniqueSuffix: 'did_no_unique_suffix',
  DocumentIncorretEncodedFormat: 'document_incorrect_encoded_format',
  DocumentNotJson: 'document_not_json',
  DocumentNotValidOriginalDocument: 'document_not_valid_original_document',
  MultihashNotLatestSupportedHashAlgorithm: 'multihash_not_latest_supported_hash_algorithm',
  MultihashUnsupportedHashAlgorithm: 'multihash_unsupported_hash_algorithm',
  OperationCreateInvalidDidDocument: 'operation_create_invalid_did_document',
  OperationCountLessThanZero: 'operation_count_less_than_zero',
  OperationExceedsMaximumSize: 'operation_exceeds_maximum_size',
  OperationHeaderMissingKid: 'operation_header_missing_kid',
  OperationHeaderMissingOrIncorrectAlg: 'operation_header_missing_or_incorrect_alg',
  OperationHeaderMissingOrIncorrectOperation: 'operation_header_missing_or_incorrect_operation',
  OperationMissingOrIncorrectPayload: 'operation_missing_or_incorrect_payload',
  OperationMissingOrIncorrectSignature: 'operation_missing_or_incorrect_signature',
  OperationRecoverPayloadHasMissingOrInvalidDidDocument: 'operation_recover_payload_has_missing_or_invalid_did_document',
  OperationRecoverPayloadHasMissingOrInvalidDidUniqueSuffixType: 'operation_recover_payload_has_missing_or_invalid_did_unique_suffix_type',
  OperationRecoverPayloadHasMissingOrUnknownProperty: 'operation_recover_payload_has_missing_or_unknown_property',
  OperationUpdatePayloadMissingOrInvalidDidUniqueSuffixType: 'operation_update_payload_missing_or_invalid_did_unique_suffix_type',
  OperationUpdatePayloadMissingOrInvalidNextUpdateOtpHash: 'operation_update_payload_missing_or_invalid_next_update_otp_hash',
  OperationUpdatePayloadMissingOrInvalidUpdateOtp: 'operation_update_payload_missing_or_invalid_update_otp',
  OperationUpdatePayloadMissingOrUnknownProperty: 'operation_update_payload_missing_or_unknown_property',
  OperationUpdatePatchesNotArray: 'operation_update_patches_not_array',
  OperationUpdatePatchMissingOrUnknownAction: 'operation_update_patch_missing_or_unknown_action',
  OperationUpdatePatchMissingOrUnknownProperty: 'operation_update_patch_missing_or_unknown_property',
  OperationUpdatePatchPublicKeyAddRecoveryKeyNotAllowed: 'operation_update_patch_public_key_add_recovery_key_not_allowed',
  OperationUpdatePatchPublicKeyControllerNotAllowed: 'operation_update_patch_public_key_controller_not_allowed',
  OperationUpdatePatchPublicKeyHexMissingOrIncorrect: 'operation_update_patch_public_key_hex_missing_or_incorrect',
  OperationUpdatePatchPublicKeyIdNotString: 'operation_update_patch_public_key_id_not_string',
  OperationUpdatePatchPublicKeyMissingOrUnknownProperty: 'operation_update_patch_public_key_missing_or_unknown_property',
  OperationUpdatePatchPublicKeysNotArray: 'operation_update_patch_public_keys_not_array',
  OperationUpdatePatchPublicKeyTypeMissingOrUnknown: 'operation_update_patch_public_key_type_missing_or_unknown',
  OperationUpdatePatchServiceEndpointNotString: 'operation_update_patch_service_endpoint_not_string',
  OperationUpdatePatchServiceEndpointsNotArray: 'operation_update_patch_service_endpoints_not_array',
  OperationUpdatePatchServiceTypeMissingOrUnknown: 'operation_update_patch_service_type_missing_or_unknown',
  QueueingMultipleOperationsPerDidNotAllowed: 'queueing_multiple_operations_per_did_not_allowed',
  TransactionFeePaidInvalid: 'transaction_fee_paid_is_invalid',
  TransactionFeePaidLessThanNormalizedFee: 'transaction_fee_paid_less_than_normalized_fee'
};
