const TruncatedHtml = ({ html, maxLength }) => {
  const length = maxLength ? maxLength : html.length;

  let truncatedHtml = html.substring(0, length);

  if (truncatedHtml.lastIndexOf("<") > truncatedHtml.lastIndexOf(">")) {
    const lastOpeningTagIndex = truncatedHtml.lastIndexOf("<");
    truncatedHtml = truncatedHtml.substring(0, lastOpeningTagIndex);
  }

  if (html.length > length) {
    truncatedHtml += "...";
  }

  return <div dangerouslySetInnerHTML={{ __html: truncatedHtml }} />;
};

export default TruncatedHtml;
