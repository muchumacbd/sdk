export enum MessageType {
	AUTH_ERROR = '@pi:app:error:auth',
	UNKNOWN_ERROR = '@pi:app:error:unknown',
	OPEN_APP_CONVERSATION_WITH_ID = '@pi:app:conversation:open_with_id',
	OPEN_SHARE_DIALOG_ACTION = '@pi:app:share_dialog:open',
	PREPARE_PAYMENT_FLOW = '@pi:app:payments:prepare_payment_flow',
	SHOW_PRE_PAYMENT_ERROR = '@pi:app:payments:show_pre_payment_error',
	START_PAYMENT_FLOW = '@pi:app:payments:start_payment_flow',
	WAIT_FOR_TRANSACTION = '@pi:app:payments:wait_for_transaction',
	SDK_COMMUNICATION_INFORMATION_REQUEST = '@pi:app:sdk:communication_information_request',
}
