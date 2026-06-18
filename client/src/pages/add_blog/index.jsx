import { useContext } from "react";
import classes from "./styles.module.css";
import { GlobalContext } from "../../context";
import axios from 'axios'
import {useLocation, useNavigate} from 'react-router-dom'
import { useEffect } from "react";
export default function AddNewBlog() {

    const {formData , setFormData , isEdit , setIsEdit} = useContext(GlobalContext)
    const navigate = useNavigate()
    const location = useLocation()


    console.log(formData)

    async function handleSaveBlogToDataBase(){
        const response = isEdit ?
        await axios.put(`http://localhost:5000/api/blogs/update/${location.state.getCurrentBlogItem._id}`,{
            title : formData.title,
            description : formData.description,
        })
        :
        await axios.post('http://localhost:5000/api/blogs/add',{
            title : formData.title,
            description : formData.description
        })
        const result = await response.data
        console.log(result)

        if(result){
            setIsEdit(false)
            setFormData({
                title:"",
                description:"",
            })
            navigate("/")
        }
    }
    useEffect(() =>{
        console.log(location)
        if (location.state){
            const {getCurrentBlogItem} = location.state
            setIsEdit(true)
            setFormData({
                title : getCurrentBlogItem.title,
                description : getCurrentBlogItem.description
            })
        }

    },[location])

  return (
    <div className={classes.wrapper}>
      <h1>{isEdit ? "Edit a Blog " : "Add a Blog"}</h1>
      <div className={classes.formWrapper}>
        <input
          name="title"
          placeholder="Enter blog title"
          id="title"
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({
            ...formData,
            title : e.target.value
          })}
        />
        <textarea
          name="description"
          placeholder="enter blog description"
          id="description"
          value={formData.description}
          onChange={(e) => setFormData({
            ...formData,
            description : e.target.value
          })}
        />
        <button onClick={handleSaveBlogToDataBase}>{
            isEdit ? "Edit a blog" : "Add a blog"
            }
        </button>
      </div>
    </div>
  );
}
