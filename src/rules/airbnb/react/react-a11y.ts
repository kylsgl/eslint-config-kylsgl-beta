import { FilesGlob } from '../../../constants';
import { type RuleConfig } from '../../../types';

const rules: RuleConfig = {
	files: FilesGlob.JSX,
	name: 'airbnb/react-a11y',
	rules: {
		// ensure emoji are accessible
		// https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/accessible-emoji.md
		// disabled; rule is deprecated
		'jsx-a11y/accessible-emoji': 'off',

		// Enforce that all elements that require alternative text have meaningful information
		// https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md
		'jsx-a11y/alt-text': [
			'error',
			{
				area: [],
				elements: ['area', 'img', 'input[type="image"]', 'object'],
				img: [],
				'input[type="image"]': [],
				object: [],
			},
		],

		// Ensures anchor text is not ambiguous
		// https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/93f78856655696a55309440593e0948c6fb96134/docs/rules/anchor-ambiguous-text.md
		'jsx-a11y/anchor-ambiguous-text': 'error',

		// Enforce that anchors have content
		// https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-has-content.md
		'jsx-a11y/anchor-has-content': ['error', { components: [] }],

		// ensure <a> tags are valid
		// https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/0745af376cdc8686d85a361ce36952b1fb1ccf6e/docs/rules/anchor-is-valid.md
		'jsx-a11y/anchor-is-valid': [
			'error',
			{
				aspects: ['invalidHref', 'noHref', 'preferButton'],
				components: ['Link'],
				specialLink: ['to'],
			},
		],

		// elements with aria-activedescendant must be tabbable
		// https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-activedescendant-has-tabindex.md
		'jsx-a11y/aria-activedescendant-has-tabindex': 'error',

		// Enforce all aria-* props are valid.
		// https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-props.md
		'jsx-a11y/aria-props': 'error',

		// Enforce ARIA state and property values are valid.
		// https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-proptypes.md
		'jsx-a11y/aria-proptypes': 'error',

		// Require ARIA roles to be valid and non-abstract
		// https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md
		'jsx-a11y/aria-role': ['error', { ignoreNonDOM: false }],

		// Enforce that elements that do not support ARIA roles, states, and
		// properties do not have those attributes.
		// https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-unsupported-elements.md
		'jsx-a11y/aria-unsupported-elements': 'error',

		// Ensure the autocomplete attribute is correct and suitable for the form field it is used with
		// https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/29c68596b15c4ff0a40daae6d4a2670e36e37d35/docs/rules/autocomplete-valid.md
		'jsx-a11y/autocomplete-valid': [
			'off',
			{
				inputComponents: [],
			},
		],

		// require onClick be accompanied by onKeyUp/onKeyDown/onKeyPress
		// https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/click-events-have-key-events.md
		'jsx-a11y/click-events-have-key-events': 'error',

		// Enforce that a control (an interactive element) has a text label.
		// https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/control-has-associated-label.md
		'jsx-a11y/control-has-associated-label': [
			'error',
			{
				controlComponents: [],
				depth: 5,
				ignoreElements: [
					'audio',
					'canvas',
					'embed',
					'input',
					'textarea',
					'tr',
					'video',
				],
				ignoreRoles: [
					'grid',
					'listbox',
					'menu',
					'menubar',
					'radiogroup',
					'row',
					'tablist',
					'toolbar',
					'tree',
					'treegrid',
				],
				labelAttributes: ['label'],
			},
		],

		// ensure <hX> tags have content and are not aria-hidden
		// https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/heading-has-content.md
		'jsx-a11y/heading-has-content': ['error', { components: [''] }],

		// require HTML elements to have a "lang" prop
		// https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/html-has-lang.md
		'jsx-a11y/html-has-lang': 'error',

		// ensure iframe elements have a unique title
		// https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/iframe-has-title.md
		'jsx-a11y/iframe-has-title': 'error',

		// Prevent img alt text from containing redundant words like "image", "picture", or "photo"
		// https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-redundant-alt.md
		'jsx-a11y/img-redundant-alt': 'error',

		// Elements with an interactive role and interaction handlers must be focusable
		// https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/interactive-supports-focus.md
		'jsx-a11y/interactive-supports-focus': 'error',

		// Enforce that a label tag has a text label and an associated control.
		// https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/b800f40a2a69ad48015ae9226fbe879f946757ed/docs/rules/label-has-associated-control.md
		'jsx-a11y/label-has-associated-control': [
			'error',
			{
				assert: 'both',
				controlComponents: [],
				depth: 25,
				labelAttributes: [],
				labelComponents: [],
			},
		],

		// require that JSX labels use "htmlFor"
		// https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md
		// deprecated: replaced by `label-has-associated-control` rule
		'jsx-a11y/label-has-for': [
			'off',
			{
				allowChildren: false,
				components: [],
				required: {
					every: ['id', 'nesting'],
				},
			},
		],

		// require HTML element's lang prop to be valid
		// https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/lang.md
		'jsx-a11y/lang': 'error',

		// media elements must have captions
		// https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/media-has-caption.md
		'jsx-a11y/media-has-caption': [
			'error',
			{
				audio: [],
				track: [],
				video: [],
			},
		],

		// require that mouseover/out come with focus/blur, for keyboard-only users
		// https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md
		'jsx-a11y/mouse-events-have-key-events': 'error',

		// Prevent use of `accessKey`
		// https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-access-key.md
		'jsx-a11y/no-access-key': 'error',

		// Enforce that aria-hidden="true" is not set on focusable elements.
		// https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/93f78856655696a55309440593e0948c6fb96134/docs/rules/no-aria-hidden-on-focusable.md
		'jsx-a11y/no-aria-hidden-on-focusable': 'error',

		// prohibit autoFocus prop
		// https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-autofocus.md
		'jsx-a11y/no-autofocus': ['error', { ignoreNonDOM: true }],

		// prevent distracting elements, like <marquee> and <blink>
		// https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-distracting-elements.md
		'jsx-a11y/no-distracting-elements': [
			'error',
			{
				elements: ['blink', 'marquee'],
			},
		],

		// WAI-ARIA roles should not be used to convert an interactive element to non-interactive
		// https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-interactive-element-to-noninteractive-role.md
		'jsx-a11y/no-interactive-element-to-noninteractive-role': [
			'error',
			{
				tr: ['none', 'presentation'],
			},
		],

		// A non-interactive element does not support event handlers (mouse and key handlers)
		// https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-interactions.md
		'jsx-a11y/no-noninteractive-element-interactions': [
			'error',
			{
				handlers: [
					'onClick',
					'onKeyDown',
					'onKeyPress',
					'onKeyUp',
					'onMouseDown',
					'onMouseUp',
				],
			},
		],

		// WAI-ARIA roles should not be used to convert a non-interactive element to interactive
		// https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-to-interactive-role.md
		'jsx-a11y/no-noninteractive-element-to-interactive-role': [
			'error',
			{
				li: ['menuitem', 'option', 'row', 'tab', 'treeitem'],
				ol: [
					'listbox',
					'menu',
					'menubar',
					'radiogroup',
					'tablist',
					'tree',
					'treegrid',
				],
				table: ['grid'],
				td: ['gridcell'],
				ul: [
					'listbox',
					'menu',
					'menubar',
					'radiogroup',
					'tablist',
					'tree',
					'treegrid',
				],
			},
		],

		// Tab key navigation should be limited to elements on the page that can be interacted with.
		// https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-tabindex.md
		'jsx-a11y/no-noninteractive-tabindex': [
			'error',
			{
				allowExpressionValues: true,
				roles: ['tabpanel'],
				tags: [],
			},
		],

		// require onBlur instead of onChange
		// https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-onchange.md
		'jsx-a11y/no-onchange': 'off',

		// ensure HTML elements do not specify redundant ARIA roles
		// https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-redundant-roles.md
		'jsx-a11y/no-redundant-roles': [
			'error',
			{
				nav: ['navigation'],
			},
		],

		// Enforce that DOM elements without semantic behavior not have interaction handlers
		// https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
		'jsx-a11y/no-static-element-interactions': [
			'error',
			{
				handlers: [
					'onClick',
					'onKeyDown',
					'onKeyPress',
					'onKeyUp',
					'onMouseDown',
					'onMouseUp',
				],
			},
		],

		// Enforces using semantic DOM elements over the ARIA role property.
		// https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/93f78856655696a55309440593e0948c6fb96134/docs/rules/prefer-tag-over-role.md
		// TODO: semver-major, enable
		'jsx-a11y/prefer-tag-over-role': 'off',

		// ----------------------------------------------------
		// Rules that no longer exist in eslint-plugin-jsx-a11y
		// ----------------------------------------------------

		// Enforce that elements with ARIA roles must have all required attributes
		// for that role.
		// https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-has-required-aria-props.md
		'jsx-a11y/role-has-required-aria-props': 'error',

		// Enforce that elements with explicit or implicit roles defined contain
		// only aria-* properties supported by that role.
		// https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-supports-aria-props.md
		'jsx-a11y/role-supports-aria-props': 'error',

		// only allow <th> to have the "scope" attr
		// https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/scope.md
		'jsx-a11y/scope': 'error',

		// Enforce tabIndex value is not greater than zero.
		// https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/tabindex-no-positive.md
		'jsx-a11y/tabindex-no-positive': 'error',
	},
};

export default rules;
