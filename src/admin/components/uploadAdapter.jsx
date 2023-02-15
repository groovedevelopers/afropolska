import {storage} from '../../server/firebase.config'
import {  getDownloadURL  } from 'rxfire/storage';
import { uploadBytes, ref } from 'firebase/storage';
import { lastValueFrom } from "rxjs";

import {Subject } from 'rxjs';
export const uploadResult$ = new Subject()

class UploadAdapter {
    constructor(loader) {
        this.loader = loader
    }



    upload() {
        return this.loader.file.then(
            (file) => {
                const fileRef = `images/${file.name}`
                const storageref = ref(storage, fileRef);
                const task = uploadBytes(storageref, file)

                const result = task.then(() => lastValueFrom(getDownloadURL(storageref)).then((url) => {
                    uploadResult$.next({
                        url, fileRef 
                    });
                    return {default: url}
                }));
                
                return result

            }
                
        )}

    abort() {
       
    }
}





export default UploadAdapter