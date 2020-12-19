import { registerBlockType } from "@wordpress/blocks";
import {
	RichText,
	InspectorControls,
	ColorPalette,
	MediaUpload,
	// 	InnerBlocks,
	// 	BlockControls,
	// 	AlignmentToolbar,
} from "@wordpress/block-editor";
import { RangeControl, PanelBody, IconButton } from "@wordpress/components";

// const ALLOWED_BLOCKS = ["core/button"];

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
		titleColor: {
			type: " string",
			default: "black",
		},
		body: {
			type: "string",
			source: "html",
			selector: "p",
		},
		backgroundImage: {
			type: "string",
			default: null,
		},
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
		const setAttrValue = (name) => (value) =>
			setAttributes({ [name]: value });

		const handleChangeTitle = setAttrValue("title");
		const handleChangeBody = setAttrValue("body");
		const handleChangeTitleColor = setAttrValue("titleColor");
		const handleSelectBackgroundImage = (image) =>
			setAttrValue("backgroundImage")(image.sizes.full.url);

		return (
			<>
				<InspectorControls>
					<PanelBody title="Font color settings">
						<p>
							<strong>Select a title color:</strong>
						</p>
						<ColorPalette
							value={attributes.titleColor}
							onChange={handleChangeTitleColor}
						/>
					</PanelBody>
					<PanelBody title="Background image settings">
						<p>
							<strong>Select a background image:</strong>
						</p>
						<MediaUpload
							type="image"
							value={attributes.backgroundImage}
							onSelect={handleSelectBackgroundImage}
							render={({ open }) => (
								<IconButton
									className="components-button block-editor-media-placeholder__button block-editor-media-placeholder__upload-button"
									icon="upload"
									onClick={open}
								>
									Background image
								</IconButton>
							)}
						/>
					</PanelBody>
				</InspectorControls>
				<div className="cta-editor">
					<div className="cta">
						<RichText
							key="editable"
							style={{ color: attributes.titleColor }}
							tagName="h2"
							placeholder="Title"
							value={attributes.title}
							onChange={handleChangeTitle}
						/>
						<RichText
							key="editable"
							tagName="p"
							placeholder="Body"
							value={attributes.body}
							onChange={handleChangeBody}
						/>
					</div>
				</div>
			</>
		);
	},

	save: ({ attributes }) => {
		return (
			<div className="cta">
				<h2 style={{ color: attributes.titleColor }}>
					{attributes.title}
				</h2>
				<RichText.Content tagName="p" value={attributes.body} />
			</div>
		);
	},

	// custom functions
});
