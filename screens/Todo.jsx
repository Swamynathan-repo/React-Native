import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity,FlatList } from 'react-native';
import React, {useEffect, useState} from 'react';
import { getProducts, deleteProduct, updateProduct, createProduct } from './api/API';


export default Todo = () => {

    const [name, setName]= useState("");
    const [quality, setQuality]= useState("");
    const [price, setPrice]= useState("");
    const [products, setProducts] = useState([]);
    const [editingId, setEditingId] = useState(null);

    // fetch data on load
   const loadProduct = async () => {
  try {
    const response = await getProducts();
    console.log("Products:", response.data); // <--- FIX
    setProducts(response.data);              // <--- FIX
  } catch (err) {
    console.log("Error:", err.message);
  }
};


    useEffect (()=>{
        loadProduct()
        },[]
    );

    // add and update
    const handleSubmit = async ()=>{
        const data= {name,quality, price};
        if(editingId){
            await updateProduct(editingId,data);
            setEditingId(null);
        } else{
        await createProduct(data);
        }

        setName("");
        setQuality("");
        setPrice("");     
        loadProduct("");
    }
// for delete
    const handleDelete= async(_id)=>{
        await deleteProduct(_id);
        loadProduct();
    }
// for edit
    const handleEdit = (item) => {
      setEditingId(item._id);
      setName(item.name || "");
      setQuality(item.quality || "");
      setPrice(item.price !== undefined && item.price !== null ? String(item.price) : "");
    };


  return (
     <View style={styles.container}>

      <Text style={styles.title}>Product Form</Text>

      <TextInput
      placeholder='Name'
      onChangeText={setName}
      value={name}
      
      style={styles.input}/>

      <TextInput
      placeholder='Quality'
      onChangeText={setQuality}
      value={quality}
      style={styles.input}/>

      <TextInput
      placeholder='Price'
      onChangeText={setPrice}
      keyboardType='numeric'
      value={price}
      style={styles.input}/>

      <View>
        <Button title= {editingId ? 'Update product' : 'Add product'} 
        onPress={handleSubmit}
        />
      </View>

      <Text style={styles.listTitle}>Product List</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item._id.toString()}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
           <Text> {item.name} --  {item.quality} -- ₹{item.price} </Text>

            <View style={styles.buttons}>
                <TouchableOpacity onPress={() => handleEdit(item)}>   
                    <Text style={styles.edit}>Edit</Text>                 
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleDelete(item._id)}>   
                    <Text style={styles.delete}>Delete</Text>                 
                </TouchableOpacity>

            </View>
        </View>
        )}

      />

    </View>
  )
}

const styles = StyleSheet.create({
 container: { padding: 20, flex: 1 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 15 },
  input: {
   borderWidth: 1,
    borderColor: "#aaa",
    marginBottom: 10,
    padding: 10,
    borderRadius: 5
  },
  listTitle: {
    fontSize: 20,
    marginTop: 25,
    fontWeight: "bold"
  },
  listItem: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: "#f1f1f1",
    borderRadius: 5,
    alignItems:'center',
    flexDirection: "row",
    justifyContent: "space-between"
  },
  buttons: {
    flexDirection: "row"
  },
  edit: {
    marginRight: 10,
    padding:5,
    borderRadius:5,
    color: "white",
    backgroundColor:"blue"
  },
  delete: {
    color: "white",
    padding:5,
    borderRadius:5,
    backgroundColor:"red"
  }
})