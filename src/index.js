import { registerBlockType } from "@wordpress/blocks";
import {
	RichText,
	InspectorControls,
	ColorPalette,
	MediaUpload,
	InnerBlocks,
	// 	BlockControls,
	// 	AlignmentToolbar,
} from "@wordpress/block-editor";
import { RangeControl, PanelBody, Button } from "@wordpress/components";

const ALLOWED_BLOCKS = ["core/button"];

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
		overlayColor: {
			type: "string",
			default: "rgba(0, 0, 0, .5)",
		},
		overlayOpacity: {
			type: "number",
			default: 0.3,
		},
	},

	// built-in functions

	edit: ({ attributes, setAttributes }) => {
		const setAttrValue = (name) => (value) =>
			setAttributes({ [name]: value });

		const handleChangeTitle = setAttrValue("title");
		const handleChangeBody = setAttrValue("body");
		const handleChangeTitleColor = setAttrValue("titleColor");
		const handleSelectBackgroundImage = (image) =>
			setAttributes({ backgroundImage: image.sizes.full.url });
		const handleChangeOverlayColor = setAttrValue("overlayColor");
		const handleChangeOverlayOpacity = setAttrValue("overlayOpacity");

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
								<Button
									className="components-button block-editor-media-placeholder__button block-editor-media-placeholder__upload-button"
									icon="upload"
									onClick={open}
								>
									Background image
								</Button>
							)}
						/>
						<div
							style={{ marginTop: "20px", marginBottom: "40px" }}
							className="overlay"
						>
							<p>
								<strong>Overlay settings:</strong>
							</p>
							<ColorPalette
								value={attributes.overlayColor}
								onChange={handleChangeOverlayColor}
							/>
							<RangeControl
								label="Overlay opacity"
								value={attributes.overlayOpacity}
								onChange={handleChangeOverlayOpacity}
								min={0}
								max={1}
								step={0.01}
							/>
						</div>
					</PanelBody>
				</InspectorControls>
				<div className="cta-editor">
					<div
						className="cta"
						style={{
							backgroundImage: `url(${attributes.backgroundImage})`,
							backgroundSize: "cover",
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat",
						}}
					>
						<div
							className="overlay"
							style={{
								backgroundColor: attributes.overlayColor,
								opacity: attributes.overlayOpacity,
							}}
						></div>
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
						<InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
					</div>
				</div>
			</>
		);
	},

	save: ({ attributes }) => {
		return (
			<div
				className="cta"
				style={{
					backgroundImage: `url(${attributes.backgroundImage})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
			>
				<div
					className="overlay"
					style={{
						backgroundColor: attributes.overlayColor,
						opacity: attributes.overlayOpacity,
					}}
				></div>
				<h2 style={{ color: attributes.titleColor }}>
					{attributes.title}
				</h2>
				<RichText.Content tagName="p" value={attributes.body} />
				<InnerBlocks.Content />
			</div>
		);
	},

	// custom functions
});
