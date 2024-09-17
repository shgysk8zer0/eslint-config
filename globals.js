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
	...globals.browser,
};

export const node = {
	AggregateError: false,
	Iterator: false,
	Scheduler: false,
	URLPattern: false,
	scheduler: false,
	...globals.node,
};
