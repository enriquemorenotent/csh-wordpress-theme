import { registerBlockType } from "@wordpress/blocks";
import {
	RichText,
	// 	ColorPalette,
	// 	MediaUpload,
	// 	InspectorControls,
	// 	InnerBlocks,
	// 	BlockControls,
	// 	AlignmentToolbar,
} from "@wordpress/block-editor";
// import { RangeControl, PanelBody, IconButton } from "@wordpress/components";

// // const ALLOWED_BLOCKS = ["core/button"];

registerBlockType("csh/cta", {
	// built-in attributes

	title: "CSH - CTA",
	description: "Call To Action",
	icon: "format-image",
	category: "design",

	// custom attributes

	attributes: {
		title: {
			type: "string",
			source: "html",
			selector: "h2",
		},
		// 		titleColor: {
		// 			type: " string",
		// 			default: "black",
		// 		},
		body: {
			type: "string",
			source: "html",
			selector: "p",
		},
		// 		backgroundImage: {
		// 			type: "string",
		// 			default: null,
		// 		},
		// 		overlayColor: {
		// 			type: "string",
		// 			default: "rgba(0, 0, 0, .5)",
		// 		},
		// 		overlayOpacity: {
		// 			type: "number",
		// 			default: 0.3,
		// 		},
	},

	// built-in functions

	edit: ({ attributes, setAttributes }) => {
		const onChangeTitle = (value) => setAttributes({ title: value });

		const onChangeBody = (value) => setAttributes({ body: value });

		return (
			<div className="cta-editor">
				<div>Editor for CTA</div>
				<div className="cta">
					<RichText
						key="editable"
						tagName="h2"
						placeholder="Title"
						value={attributes.title}
						onChange={onChangeTitle}
					/>
					<RichText
						key="editable"
						tagName="p"
						placeholder="Body"
						value={attributes.body}
						onChange={onChangeBody}
					/>
				</div>
			</div>
		);
	},

	save: ({ attributes }) => {
		return (
			<div className="cta">
				<h2>{attributes.title}</h2>
				<RichText.Content tagName="p" value={attributes.body} />
			</div>
		);
	},

	// custom functions
});
