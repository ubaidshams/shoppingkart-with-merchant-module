import React, { useState, Fragment, useEffect } from "react";
import { useParams , useNavigate } from "react-router-dom";
import Styles from "./product.module.css";
import Typography from "@mui/material/Typography";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";

import {
  TextField,
  Button,
  makeStyles,
  IconButton,
  Box,
} from "@material-ui/core";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import BackdropSpinner from "../../../components/spinner/BackdropSpinner"
import { HighlightOffOutlined, AddCircleOutline } from "@mui/icons-material";
import Axios from "../../../apis/Axios";
import {
  firstNameRegex,
  alphaNeumericSpaceRegex,
  alphaSpaceRegex,
  numberDecimalRegex,
} from "../../../validation/Regex";

const useStyles = makeStyles((theme) => ({
  formTextField: {
    marginLeft: 5,
    marginRight: 5,
  },
}));

const EditProduct = () => {
  let classes = useStyles();
  let navigate = useNavigate();
  let [showBackdrop, setShowBackdrop]=useState(false)
  let { id } = useParams();
  let [name, setName] = useState("");
  let [brand, setBrand] = useState("");
  let [category, setCategory] = useState("");
  let [description, setDescription] = useState("");
  let [offer, setOffer] = useState(0);
  let [price, setPrice] = useState(0);
  let [productImageURLs, setProductImagesURls] = useState([]);
  let [productImage, setProductImage] = useState("");
  let [quantity, setQuantity] = useState(0);
  let [tags, setTags] = useState("");
  let [searchTags, setSearchTags] = useState([]);
  let [title, setTitle] = useState("");
  let [type, setType] = useState("");
  let [thumbnailURL, setThumbnailURL] = useState("");

  let currUser = useSelector((state) => state.user.currentUser);
  let { userId } = currUser;
  // edit working
  useEffect(() => {
    let getOneProduct = () => {
      fetch(
        `http://localhost:8080/shopping-kart-ty-api-0.0.1-SNAPSHOT/products/${id}`
      )
        .then((res) => res.json())
        .then((data) => {
          let product = data.data;
          console.log(product);
          setName(product.name);
          setBrand(product.brand);
          setCategory(product.category);
          setDescription(product.description);
          setOffer(product.offer);
          setPrice(product.price);
          setProductImagesURls(product.productImageURLs);
          setQuantity(product.quantity);
          setSearchTags(product.searchTags);
          setTitle(product.title);
          setType(product.type);
          setThumbnailURL(product.thumbnailURL);
        })

        .catch((err) => console.log(err));
    };
    getOneProduct();
  }, [id]);

  //! adding single product in list
  let handleSubmit = async () => {
    try {
        setShowBackdrop(true)
      let product = {
        brand,
        category,
        description,
        merchantId: userId,
        name,
        offer,
        price,
        productImageURLs,
        quantity,
        searchTags,
        thumbnailURL,
        title,
        type,
      };

      let payload = product;
      let response = await Axios.put(`/products?id=${id}`, payload);
      setShowBackdrop(false)
      toast.success(response.data.message);
      setBrand("");
      setCategory("");
      setName("");
      setDescription("");
      setOffer("");
      setPrice("");
      setProductImagesURls([]);
      setQuantity("");
      setSearchTags([]);
      setThumbnailURL("");
      setTitle("");
      setType("");
      navigate(-1)
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  //Product category List
  let categoryList = [
    "beauty",
    "pharmacy",
    "grooming",
    "clothing",
    "electronic",
    "hardware",
    "furniture",
    "appliances",
    "books",
    "toys",
    "other",
  ];

  //BEGIN :: ProductImageURLs handler
  let addProductImage = () => {
    if (productImage.length >= 1 && productImageURLs.length < 5) {
      setProductImagesURls([productImage, ...productImageURLs]);
      setProductImage("");
    } else if (productImage.length <= 0) {
      toast.error("cannot accept empty value");
    } else {
      toast.info("only 5 images can added");
    }
  };
  let removeProductImage = (id) => {
    let finalImages = productImageURLs.filter(
      (val) => productImageURLs.indexOf(val) !== id
    );
    setProductImagesURls(finalImages);
  };
  //END :: ProductImageURLs handler

  //BEGIN :: SearchTags handler
  let addSearchTags = () => {
    if (tags.length >= 1 && searchTags.length < 20) {
      setSearchTags([tags, ...searchTags]);
      setTags("");
    } else if (tags.length <= 0) {
      toast.error("cannot accept empty value");
    } else {
      toast.info("only 20 search tags can be added");
    }
  };
  let removeSearchTags = (id) => {
    let finalTags = searchTags.filter((val) => searchTags.indexOf(val) !== id);
    setSearchTags(finalTags);
  };
  //END :: SearchTags handler

  return (
    <section className="productFromSection">
      <Typography variant="h4" align="center">
        Edit Product
      </Typography>
      <article className="formBlock">
        <div className={Styles.block1}>
          <TextField
            label="Product Name"
            className={classes.formTextField}
            margin="dense"
            id="pname"
            variant="outlined"
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            error={name != "" && firstNameRegex.test(name) === false}
              helperText={
                name != "" && /^[a-zA-Z_. 0-9]+$/g.test(name) === false
                  ? "must be alphabets"
                  : (name != "" && name.length < 3) || name.length > 20
                  ? "char should be between 3-20"
                  : name != "" && firstNameRegex.test(name) === false
                  ? "invalid name"
                  : ""
              }
          />
          <TextField
            label="Brand"
            className={classes.formTextField}
            margin="dense"
            id="brand"
            variant="outlined"
            required
            value={brand}
            onChange={(e) => {
              setBrand(e.target.value);
            }}
            error={brand != "" && firstNameRegex.test(brand) === false}
              helperText={
                brand != "" && /^[a-zA-Z_.]+$/g.test(brand) === false
                  ? "must be alphabets"
                  : (brand != "" && brand.length < 3) || brand.length > 20
                  ? "char should be between 3-20"
                  : brand != "" && firstNameRegex.test(brand) === false
                  ? "invalid name"
                  : ""
              }
          />
          <TextField
            label="Product Title"
            className={classes.formTextField}
            size="medium"
            margin="dense"
            id="productTilte"
            variant="outlined"
            required
            value={title}
            onChange={(e) => {
              setTitle(e.target.value.toLowerCase());
            }}
            error={title != "" && alphaNeumericSpaceRegex.test(title) === false}
              helperText={
                title != "" && alphaNeumericSpaceRegex.test(title) === false
                  ? "must be alphabets"
                  : (title != "" && title.length < 3) || title.length > 40
                  ? "char should be between 3-40"
                  : title != "" && alphaNeumericSpaceRegex.test(title) === false
                  ? "invalid title"
                  : ""
              }
          />

          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-simple-select-helper-label">
              Category
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="category"
              value={category}
              label="Category"
              onChange={(e) => setCategory(e.target.value)}
            >
              {categoryList.map((val, index) => {
                return (
                  <MenuItem key={index} value={val}>
                    {val}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

          <TextField
            label="Type"
            className={classes.formTextField}
            size="medium"
            margin="dense"
            id="type"
            variant="outlined"
            required
            value={type}
            onChange={(e) => {
              setType(e.target.value);
            }}
            error={type != "" && alphaSpaceRegex.test(type) === false}
              helperText={
                type != "" && /^[a-zA-Z ]*$/g.test(type) === false
                  ? "must be alphabets"
                  : (type != "" && type.length < 3) || type.length > 20
                  ? "maximum length 3-20"
                  : type != "" && alphaSpaceRegex.test(type) === false
                  ? "invalid type"
                  : ""
              }
          />

          <TextField
            label="Offer"
            className={classes.formTextField}
            size="medium"
            margin="dense"
            id="offer"
            variant="outlined"
            required
            max={99}
            type="number"
            value={offer}
            onChange={(e) => {
              setOffer(e.target.value);
            }}
          />
          <TextField
            label="Price"
            className={classes.formTextField}
            size="medium"
            margin="dense"
            id="outlined-size-small"
            variant="outlined"
            required
            type="number"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <TextField
            label="Quantity"
            className={classes.formTextField}
            size="medium"
            margin="dense"
            id="outlined-size-small"
            variant="outlined"
            required
            type="number"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          />
          <TextField
            label="Tumbnail Image Link"
            className={classes.formTextField}
            margin="dense"
            id="thumbnailImages"
            variant="outlined"
            value={thumbnailURL}
            required
            onChange={(e) => setThumbnailURL(e.target.value)}
          />
        </div>
        <div className="block2">
          <TextField
            label="Description"
            id="description"
            className={classes.formTextField}
            required
            variant="outlined"
            margin="normal"
            multiline
            minRows="3"
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div div className={Styles.block3}>
          <div className={Styles.block3Child1}>
            {/*BEGIN ::  productImageURLS */}
            <div>
              <TextField
                label="Product Image Link"
                id="ProductImages"
                margin="normal"
                className={classes.formTextField}
                variant="outlined"
                value={productImage}
                onChange={(e) => setProductImage(e.target.value)}
              />
              <IconButton onClick={addProductImage}>
                <AddCircleOutline fontSize="large" color="primary" />
              </IconButton>
            </div>
            {/*END ::  productImageURLS */}

            {/*BEGIN ::  SEARCH TAGS */}
            <div>
              <TextField
                label="Search Tags"
                id="searchTags"
                margin="normal"
                className={classes.formTextField}
                variant="outlined"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
              />
              <IconButton onClick={addSearchTags}>
                <AddCircleOutline fontSize="large" color="primary" />
              </IconButton>
            </div>
            {/*END ::  SEARCH TAGS */}
          </div>
          <div className={Styles.block3Child2}>
            {/*BEGIN ::  productImageURLS */}

            <div className="imageListBlock">
              <h4>Product Image List</h4>
              <div className={Styles.listCardBlock}>
                {productImageURLs?.length > 0 ? (
                  productImageURLs.map((val, index) => {
                    return (
                      <Fragment key={index}>
                        <span className={Styles.cardBadge}>
                          {val.length > 10 ? val.slice(0, 25) + "..." : val}
                          <IconButton
                            onClick={() => removeProductImage(index)}
                            size="small"
                          >
                            <HighlightOffOutlined fontSize="inherit" />
                          </IconButton>
                        </span>
                      </Fragment>
                    );
                  })
                ) : (
                  <h6>No images added yet...</h6>
                )}
              </div>
            </div>
            {/*END ::  productImageURLS */}

            {/*BEGIN ::  SEARCH TAGS */}

            <div className="searchTagListBlock">
              <h4>Search Tags List</h4>
              <div className={Styles.listCardBlock}>
                {searchTags?.length > 0 ? (
                  searchTags.map((val, index) => {
                    return (
                      <Fragment key={index}>
                        <span className={Styles.cardBadge}>
                          {val.length > 10 ? val.slice(0, 14) + "..." : val}
                          <IconButton
                            onClick={() => removeSearchTags(index)}
                            size="small"
                          >
                            <HighlightOffOutlined fontSize="inherit" />
                          </IconButton>
                        </span>
                      </Fragment>
                    );
                  })
                ) : (
                  <h6>No search tags added yet....</h6>
                )}
              </div>
            </div>
            {/*END ::  SEARCH TAGS */}
          </div>

          {/* BEGIN :: save product  button */}
          {productImageURLs.length >= 1 &&
          searchTags.length >= 1 &&
          brand &&
          category &&
          description &&
          name &&
          price &&
          productImageURLs &&
          searchTags &&
          thumbnailURL &&
          title ? (
            <button className={Styles.bn5} onClick={handleSubmit}>
              Update Product Details
            </button>
          ) : (
            <button
              className={Styles.bn5}
              style={{ backgroundColor: "#ccc" }}
              onClick={() => toast.info("please fill all field")}
            >
              Update Product Details
            </button>
          )}
          {/* END :: save product  button */}
        </div>
        <BackdropSpinner open={showBackdrop} />
      </article>
    </section>
  );
};

export default EditProduct;
