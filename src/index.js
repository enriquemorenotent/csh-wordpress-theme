import { registerBlockType } from "@wordpress/blocks";
// import {
// 	RichText,
// 	ColorPalette,
// 	MediaUpload,
// 	InspectorControls,
// 	InnerBlocks,
// 	BlockControls,
// 	AlignmentToolbar,
// } from "@wordpress/block-editor";
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
		// 		title: {
		// 			type: "string",
		// 			source: "html",
		// 			selector: "h2",
		// 		},
		// 		titleColor: {
		// 			type: " string",
		// 			default: "black",
		// 		},
		// 		body: {
		// 			type: "string",
		// 			source: "html",
		// 			selector: "p",
		// 		},
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
		return (
			<div className="cta-editor">
				<div className="cta">Hello world</div>
			</div>
		);
	},

	save: (
		{
			// 		attributes: {
			// 			title,
			// 			body,
			// 			titleColor,
			// 			backgroundImage,
			// 			overlayColor,
			// 			overlayOpacity,
			// },
		}
	) => {
		return <div className="cta">Hello frontend</div>;
	},

	// custom functions
});
