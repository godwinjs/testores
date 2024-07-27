export function addArray(arr: number[]) {
    let added: number = 0;
    arr.map(i => added = added + i)
    return added
}

export function urltoFile(url: any, filename: string, mimeType: any){
    if (url.startsWith('data:')) {
        var arr = url.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[arr.length - 1]), 
            n = bstr.length, 
            u8arr = new Uint8Array(n);
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        var file = new File([u8arr], filename, {type:mime || mimeType});
        return Promise.resolve(file);
    }
    return fetch(url)
        .then(res => res.blob())
        .then(blob => {
          const file = new File([blob], filename,{ type: "image/png" })
          return file;
        })

        /*fetch(url)
        .then(res => res.arrayBuffer())
        .then(buf => new File([buf], filename,{type:mimeType})); */
}

export const toBase64 = (file: any) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });
//   const imageFile = await toBase64(e.target.files[0]);

export function isPasswordValid(password: string) {
    // Check for minimum length (e.g., 8 characters)
    if (password.length < 8) {
      return false;
    }
  
    // Check for number
    const hasNumber = /\d/.test(password);
  
    // Check for uppercase letter
    const hasUppercase = /[A-Z]/.test(password);
  
    // Check for lowercase letter
    const hasLowercase = /[a-z]/.test(password);
  
    // Check for special character
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
  
    // Return true if all conditions are met
    return hasNumber && hasUppercase && hasLowercase && hasSpecialChar;
  }