import { collection, getDocs, getFirestore } from "firebase/firestore"
import { app } from "./firebase"

export const getProducts = () => {

    const db = getFirestore(app)
    const productsCollection = collection(db, "products")
    const query = getDocs(productsCollection)

    return query
    .then((resultado) => {

        const productos = resultado.docs.map(doc => {
        const producto = doc.data()
        producto.id = doc.id
        return producto
    })
    return productos
    })
    .catch((error) =>{ 
        console.log(error)
    })
}