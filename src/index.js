// import { registerBlockType } from "@wordpress/blocks";
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

// registerBlockType("csh/cta", {
// 	// built-in attributes
// 	title: "CSH - CTA",
// 	description: "Block to generate a custom CTA",
// 	icon: "format-image",
// 	category: "design",

// 	// custom attributes
// 	attributes: {
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
// 	},

// 	// built-in functions
// 	edit: ({ attributes, setAttributes }) => {
// 		const {
// 			title,
// 			body,
// 			titleColor,
// 			backgroundImage,
// 			overlayColor,
// 			overlayOpacity,
// 		} = attributes;

// 		const handleChangeTitle = (value) => setAttributes({ title: value });

// 		const handleChangeBody = (value) => setAttributes({ body: value });

// 		const handleChangeTitleColor = (value) =>
// 			setAttributes({ titleColor: value });

// 		const handleSelectImage = (image) =>
// 			setAttributes({ backgroundImage: image.sizes.full.url });

// 		const handleOverlayChange = (value) =>
// 			setAttributes({ overlayColor: value });

// 		const handleOverlayOpacity = (value) =>
// 			setAttributes({ overlayOpacity: value });

// 		return (
// 			<>
// 				<InspectorControls style={{ marginBottom: "40px" }}>
// 					<PanelBody title="Font color settings">
// 						<p>
// 							<strong>Select a color for the title</strong>
// 						</p>
// 						<ColorPalette
// 							value={titleColor}
// 							onChange={handleChangeTitleColor}
// 						/>
// 					</PanelBody>
// 					<PanelBody title="Image settings">
// 						<p>
// 							<strong>Select background image</strong>
// 						</p>
// 						<MediaUpload
// 							onSelect={handleSelectImage}
// 							type="image"
// 							value={backgroundImage}
// 							render={({ open }) => (
// 								<IconButton
// 									className="components-button block-editor-media-placeholder__button block-editor-media-placeholder__upload-button is-primary"
// 									icon="upload"
// 									onClick={open}
// 								>
// 									Background image
// 								</IconButton>
// 							)}
// 						/>
// 						<div
// 							style={{ marginBottom: "40px", marginTop: "20px" }}
// 						>
// 							<p>
// 								<strong>Select overlay</strong>
// 							</p>
// 							<ColorPalette
// 								value={overlayColor}
// 								onChange={handleOverlayChange}
// 							/>
// 							<RangeControl
// 								label="Overlay opacity"
// 								value={overlayOpacity}
// 								onChange={handleOverlayOpacity}
// 								min={0}
// 								max={1}
// 								step={0.01}
// 							/>
// 						</div>
// 					</PanelBody>
// 				</InspectorControls>
// 				<div
// 					className="cta"
// 					style={{
// 						backgroundImage: `url(${backgroundImage})`,
// 						backgroundSize: "cover",
// 						backgroundPosition: "center",
// 						backgroundRepeat: "no-repeat",
// 					}}
// 				>
// 					<div
// 						className="cta-overlay"
// 						style={{
// 							backgroundColor: overlayColor,
// 							opacity: overlayOpacity,
// 						}}
// 					></div>
// 					<RichText
// 						key="editable"
// 						tagName="h2"
// 						placeholder="Default title"
// 						value={title}
// 						onChange={handleChangeTitle}
// 						style={{ color: titleColor }}
// 					/>
// 					<RichText
// 						key="editable"
// 						tagName="p"
// 						placeholder="Default body"
// 						value={body}
// 						onChange={handleChangeBody}
// 					/>
// 					{/* <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} /> */}
// 				</div>
// 			</>
// 		);
// 	},

// 	save: ({
// 		attributes: {
// 			title,
// 			body,
// 			titleColor,
// 			backgroundImage,
// 			overlayColor,
// 			overlayOpacity,
// 		},
// 	}) => {
// 		return (
// 			<div
// 				className="cta"
// 				style={{
// 					backgroundImage: `url(${backgroundImage})`,
// 					backgroundSize: "cover",
// 					backgroundPosition: "center",
// 					backgroundRepeat: "no-repeat",
// 				}}
// 			>
// 				<div
// 					className="cta-overlay"
// 					style={{
// 						backgroundColor: overlayColor,
// 						opacity: overlayOpacity,
// 					}}
// 				></div>
// 				<h2 style={{ color: titleColor }}>{title}</h2>
// 				<RichText.Content tagName="p" value={body} />
// 				<InnerBlocks.Content />
// 			</div>
// 		);
// 	},

// 	// custom functions
// });
