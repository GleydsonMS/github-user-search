import React from "react"
import ContentLoader from "react-content-loader"

const ImageLoader = () => (
  <ContentLoader 
    speed={2}
    width={300}
    height={360}
    viewBox="0 0 300 360"
    backgroundColor="#dedede"
    foregroundColor="#f5f5f5"
  >
    <rect x="19" y="23" rx="2" ry="2" width="284" height="284" /> 
    <rect x="23" y="319" rx="0" ry="0" width="155" height="48" />
  </ContentLoader>
)

export default ImageLoader