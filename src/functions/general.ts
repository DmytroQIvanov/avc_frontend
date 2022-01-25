export const buildFormData = (
  formData: FormData,
  data: any,
  parentKey?: string
) => {
  if (
    data &&
    typeof data === "object" &&
    !(data instanceof Date) &&
    !(data instanceof File)
  ) {
    Object.keys(data).forEach((key) => {
      buildFormData(
        formData,
        data[key],
        parentKey ? `${parentKey}[${key}]` : key
      );
    });
  } else {
    if (parentKey != null) {
      const value = data == null ? "" : data;

      formData.append(parentKey, value);
    }
  }
};