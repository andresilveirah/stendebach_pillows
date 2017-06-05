const updateAttribute = ({ attributeName, value }) => ({
  type: 'ATTRIBUTE_UPDATED',
  attributeName,
  value
});

export { updateAttribute } ;
