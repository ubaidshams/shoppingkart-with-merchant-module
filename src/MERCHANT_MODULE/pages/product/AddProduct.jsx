import React, { useState, Fragment } from "react";
import Styles from "./product.module.css";
import Typography from "@mui/material/Typography";
import { toast } from "react-toastify";
import {
  TextField,
  Button,
  makeStyles,
  IconButton,
  Box,
  Card,
  MenuItem,
} from "@material-ui/core";
import { HighlightOffOutlined, AddCircleOutline } from "@mui/icons-material";

// "brand": "string",
// "category": "string",
// "description": "string",
// "name": "string",
// "offer": 0,
// "price": 0,
// "productImageURLs": [
//   "string"
// ],
// "quantity": 0,
// "rating": 0,
// "searchTags": [
//   "string"
// ],
// "thumbnailURL": "string",
// "title": "string",
// "type": "string" - catagories
// }
// ]
const useStyles = makeStyles((theme) => ({
  formTextField: {
    marginLeft: 5,
    marginRight: 5,
  },
}));

const AddProduct = () => {
  let classes = useStyles();
  let [name, setName] = useState("");
  let [brand, setBrand] = useState("");
  // =======
  let [category, setCategory] = useState("");
  // ==========
  let [description, setDescription] = useState("");
  let [offer, setOffer] = useState("");
  let [price, setPrice] = useState("");
  let [productImageURLs, setProductImagesURls] = useState([]);
  let [productImage, setProductImage] = useState("");
  let [quantity, setQuantity] = useState("");
  let [tags, setTags] = useState("");
  let [searchTags, setSearchTags] = useState([]);

  let [title, setTitle] = useState("");
  let [type, setType] = useState("");
  let [thumbnailURL, setThumbnailURL] = useState("");

  let [productList, setProductList] = useState([]);

  let handleSubmit = () => {
    let product = {
      brand,
      category: "",
      description,
      name,
      offer,
      price,
      productImageURLs,
      quantity,
      searchTags,
      thumbnailURL,
      title,
      // type": "" - catagories
    };
    console.log(product);
    setProductList([product, ...productList]);
  };

  //BEGIN :: ProductImageURLs handler
  let addProductImage = () => {
    if (productImage.length >= 1)
      setProductImagesURls([productImage, ...productImageURLs]);
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
    if (tags.length >= 1) setSearchTags([tags, ...searchTags]);
  };
  let removeSearchTags = (id) => {
    let finalTags = searchTags.filter((val) => searchTags.indexOf(val) !== id);
    setSearchTags(finalTags);
  };
  //END :: SearchTags handler

  return (
    <section className="productFromSection">
      <Typography variant="h4" align="center">
        Add Products{" "}
      </Typography>

      <article className={Styles.productMainBlock}>
        <div className={Styles.leftBlock}>
          <div className={Styles.block1}>
            <TextField
              label="Product Name"
              className={classes.formTextField}
              margin="dense"
              id="outlined-size-small"
              variant="outlined"
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <TextField
              label="Brand"
              className={classes.formTextField}
              margin="dense"
              id="outlined-size-small"
              variant="outlined"
              required
              value={brand}
              onChange={(e) => {
                setBrand(e.target.value);
              }}
            />
            <TextField
              label="Product Title"
              className={classes.formTextField}
              size="medium"
              margin="dense"
              id="outlined-size-small"
              variant="outlined"
              required
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />

            <TextField
              label="category"
              className={classes.formTextField}
              size="medium"
              margin="dense"
              id="outlined-size-small"
              variant="outlined"
              required
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
            <TextField
              label="offer"
              className={classes.formTextField}
              size="medium"
              margin="dense"
              id="outlined-size-small"
              variant="outlined"
              required
              value={offer}
              onChange={(e) => {
                setOffer(e.target.value);
              }}
            />
            <TextField
              label="price"
              className={classes.formTextField}
              size="medium"
              margin="dense"
              id="outlined-size-small"
              variant="outlined"
              required
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
              onChange={(e) => setThumbnailURL(e.target.value)}
            />
          </div>

          <div className="block2">
            <TextField
              label="Description"
              id="description"
              className={classes.formTextField}
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

              <TextField
                label="Product Image Link"
                id="ProductImages"
                margin="normal"
                className={classes.formTextField}
                variant="outlined"
                value={productImage}
                onChange={(e) => setProductImage(e.target.value)}
              />
              <IconButton onClick={addProductImage}><AddCircleOutline fontSize="large" color="primary"/></IconButton>

              {/*END ::  productImageURLS */}

              {/*BEGIN ::  SEARCH TAGS */}
              <TextField
                label="Search Tags"
                id="searchTags"
                margin="normal"
                className={classes.formTextField}
                variant="outlined"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
              />
              <IconButton onClick={addSearchTags}><AddCircleOutline fontSize="large" color="primary" /></IconButton>
              {/*END ::  SEARCH TAGS */}
            </div>
            <div className={Styles.block3Child2}>
              {/*BEGIN ::  productImageURLS */}

              <div className="imageListBlock">
                <h4>Product Image List</h4>
                <div className={Styles.listCardBlock}>
                    {productImageURLs.length > 0 ? (
                      productImageURLs.map((val, index) => {
                        return (
                          <Fragment key={index}>
                            <div className={Styles.cardBadge}>
                              {(val.length >10)? val.slice(0,10) : val}
                              <IconButton onClick={() => removeProductImage(index)} size="small">
                            <HighlightOffOutlined fontSize="inherit"/>
                            </IconButton>
                              </div>
                            
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
                {searchTags.length > 0 ? (
                  searchTags.map((val, index) => {
                    return (
                      <Fragment key={index}>
                        <div className="cardBadge">{val}</div>
                        <IconButton onClick={() => removeSearchTags(index)} size="small">
                          <HighlightOffOutlined fontSize="inherit"/>
                        </IconButton>
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
          </div>

          <button className={Styles.bn5} onClick={handleSubmit}>
            Save Product
          </button>
        </div>
        <div className={Styles.rightBlock}>
          <div className="productListBlock">
            <h3>Added Products</h3>
            {productList.map((item, index) => {
              return <div key={index}>{item.name}</div>;
            })}
          </div>
        </div>
      </article>
    </section>
  );
};

export default AddProduct;
