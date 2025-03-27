import globals from 'globals';

export const browser = {
	AggregateError: false,
	ElementInternals: false,
	Iterator: false,
	Lock: false,
	LockManager: true,
	PasswordCredential: false,
	Scheduler: false,
	TrustedHTML: false,
	TrustedScript: false,
	TrustedScriptURL: false,
	TrustedTypePolicy: false,
	TrustedTypePolicyFactory: false,
	URLPattern: false,
	cookieStore: false,
	launchQueue: false,
	scheduler: false,
	showOpenFilePicker: false,
	showSaveFilePicker: false,
	trustedTypes: false,
	CloseWatcher: false,
	TaskController: false,
	TaskSignal: false,
	...globals.browser,
};

export const node = {
	AggregateError: false,
	Iterator: false,
	scheduler: false,
	URLPattern: false,
	TaskController: false,
	TaskSignal: false,
	...globals.node,
};
