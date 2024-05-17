const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'chat-app-file');

    // Constructing the URL using the environment variable
    const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/auto/upload`;
    console.log("nmw::",process.env.REACT_APP_CLOUDINARY_CLOUD_NAME)

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            // Handle non-OK responses here
            throw new Error('Failed to upload file');
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        // Handle any errors that occur during the fetch operation
        console.error('Error uploading file:', error);
        return null; // or throw error based on your error handling strategy
    }
};

export default uploadFile;
