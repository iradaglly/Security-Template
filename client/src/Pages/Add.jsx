import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Validation } from "../Validation/Schema";
import { Input } from '@mui/material';
import Button from '@mui/material/Button';
import { postSec } from "../api/httprequests";

const Add = () => {
    const navigate = useNavigate();
    const [securities, setSecurities] = useState();
    const handleSubmit = async (values, actions) => {
      await postSec(values);
      setSecurities([...securities, values]);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${values.title} posted successfully!`,
        showConfirmButton: false,
        timer: 1500,
      });
      actions.resetForm(); 

      navigate("/");
      // add olur home page a amma reset olumur !
    };
    const formik = useFormik({
      initialValues: {
        title: "",
        desc: "",
        likeCount: "",
        commentCount: "", 
      },
      validationSchema: Validation,
      onSubmit: handleSubmit,
    });
    return (
      <>
        <Helmet>
          <title>Add</title>
        </Helmet>
        <div style={{padding:"10%" ,display:"flex",justifyContent:"center"}}>
          <form onSubmit={formik.handleSubmit}>
          <Input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              placeholder="enter image url"
              type="text"
              name="image"
              style={{display:"block",width:"500px",marginBottom:"6%"}}
            />
            {formik.errors.image && formik.touched.image && (
              <span style={{color:"red"}}>{formik.errors.image}</span>
            )}
            <Input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              placeholder="enter title"
              type="text"
              name="title"
              style={{display:"block",width:"500px",marginBottom:"6%"}}
            />
            {formik.errors.title && formik.touched.title && (
              <span style={{color:"red"}}>{formik.errors.title}</span>
            )}
            <Input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.age}
              placeholder="enter desc"
              type="text"
              name="desc"
              style={{display:"block",width:"500px",marginBottom:"6%"}}

            />
            {formik.errors.desc && formik.touched.desc && (
              <span style={{color:"red"}}>{formik.errors.desc}</span>
            )}
            <Input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.imageURL}
              placeholder="enter like count"
              type="number"
              name="likeCount"
              style={{display:"block",width:"500px",marginBottom:"6%"}}
            />
            {formik.errors.likeCount && formik.touched.likeCount && (
              <span style={{color:"red"}}>{formik.errors.likeCount}</span>
            )}
             <Input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.imageURL}
              placeholder="enter comment count"
              type="number"
              name="commentCount"
              style={{display:"block",width:"500px",marginBottom:"6%"}}
            />
            {formik.errors.commentCount && formik.touched.commentCount && (
              <span  style={{color:"red"}}>{formik.errors.commentCount}</span>
            )}
            <Button  variant="contained"
            color="success"
            style={{marginTop:"20px"}}
              disabled={Object.keys(formik.errors).length !== 0 ? true : false}
              type="submit"
            >
              Add 
            </Button>
          </form>
        </div>
      </>
    );
  };

export default Add;
