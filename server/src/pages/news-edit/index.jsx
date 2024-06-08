import React, { useEffect, useContext, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactTags } from "react-tag-autocomplete";
import ReactQuill from "react-quill";
import { convert } from 'html-to-text';
import { Link, useParams, useNavigate } from "react-router-dom";
import { AppSettings } from "../../config/app-settings";
import PerfectScrollbar from "react-perfect-scrollbar";
import { newsDetail } from "../news-detail/action";
import { newsCategoriesList } from "../categories-list/action";
import { newsAddTagList } from "../tag-list/action";
import {newsEdit} from './action';
import useCustomSnackbar from "../../hooks/toaster";

const NewsEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { publicId } = useParams();
  const context = useContext(AppSettings);
  const [isMobileEmailNavOn, setIsMobileEmailNavOn] = useState(false);
  const [tags, setTags] = useState([]);
  const [updatedContent, setUpdatedContent] = useState('');
  const [updatedTitle, setUpdatedTitle] = useState('');
  const [selectedTags, setSelectedTags] = useState([])
  const [selectedCategories, setSelectedCategories] = useState([])
  const [categories, setCategories] = useState([]);
  const { showSnackbar } = useCustomSnackbar({ position: "topRight" });

  const [editorHeight, setEditorHeight] = useState(0);
  const {
    data,
  } = useSelector((state) => state['news-detail']);

  const {
      title, 
      body: content, 
      authorName, 
      category=[], 
      status, 
      sourceUrl, 
      sourceName, 
      views, 
      thumbnailUrl
  } = data;


  const {
    data: catgoriesData,
    pagination: { totalRecords },
    isFetching,
  } = useSelector((state) => state['categories-list']);

  const {
    data: tagData,
    // pagination: { totalRecords },
    isFetchingTag,
  } = useSelector((state) => state['tag-list']);

  useEffect(() => {
    newsDetail(dispatch, { publicId });
    newsCategoriesList(dispatch);
    newsAddTagList(dispatch);
    context.handleSetAppContentFullHeight(true);
    context.handleSetAppContentClass("p-0");

   // setTags([{ value: 1, label: "breaking news" }]);

    // setSuggestions([
    //   { value: 1, label: "breaking news" },
    //   { value: 2, label: "trending news" },
    // ]);

    //setCategoriesSuggestions(catgoriesDataNew);

    // const tagDataNew = tagData.map((i, idx)=>({value: idx+1,label: i.name, ...i}))
    // console.log(tagDataNew)
    // setTagSuggestions(tagDataNew);

    setEditorHeight(window.innerHeight > 600 ? window.innerHeight - 615 : 500);

    setUpdatedTitle(title);
    setUpdatedContent(content);

    return () => {
      context.handleSetAppContentFullHeight(false);
      context.handleSetAppContentClass("");
    };
    // eslint-disable-next-line
  }, []);

  function toggleMobileEmailNav() {
    setIsMobileEmailNavOn(!isMobileEmailNavOn);
  }

  // function handleTagAdd(newTag) {
  //   console.log(newTag)
  //   setTags([...tags, newTag]);
    
  // }

  const handleTagAdd = useCallback(
    (newTag) => {
      console.log(newTag)
      setSelectedTags([...selectedTags, newTag])
    },
    [selectedTags]
  )

  const handleCatgoryAdd = useCallback(
    (newTag) => {
      console.log(newTag)
      setSelectedCategories([...selectedCategories, newTag])
    },
    [selectedCategories]
  )

  function handleTagDelete(tagIndex) {
    setTags(tags.filter((_, i) => i !== tagIndex));
  }

  const notificationHandler = () => {
    try {
      // console.log('saved')
      showSnackbar(`News has been updated successfully.`, { variant: "success" });
      navigate(`/news/detail/${publicId}`);
    } catch (error) {
      console.error('An error occurred:', error);
      showSnackbar(`An error occurred: ${error.message}`, { variant: "error" });
    }
  };
  

  const editPost = () => {
    const newSelectTagsId = selectedTags.map(i => i.publicId)
    const newSelectCategoriesId =   selectedCategories.map(i => i.publicId)

    const data = {
      publicId, 
      title: updatedTitle, 
      body: convert(updatedContent), 
      tags: newSelectTagsId, 
      category: newSelectCategoriesId
    }

    newsEdit(dispatch, data, notificationHandler)
  }


  // function handleCategoriesAdd(newCategory) {

  //   console.log(newCategory)
  //   setCategories([...categories, newCategory]);
  // }

  function handleCategoriesDelete(tagIndex) {
    setCategories(categories.filter((_, i) => i !== tagIndex));
  }
  
  return (
    <div className="mailbox">
      <div className="mailbox-sidebar">
        <div className="mailbox-sidebar-header d-flex justify-content-center">
          <button
            onClick={toggleMobileEmailNav}
            className="btn btn-dark btn-sm me-auto d-block d-lg-none"
          >
            <i className="fa fa-cog"></i>
          </button> 
        </div>
        <div
          className={
            "mailbox-sidebar-content collapse d-lg-block " +
            (isMobileEmailNavOn ? "show" : "")
          }
        >
          <PerfectScrollbar
            className="h-100"
            options={{ suppressScrollX: true }}
          >
            {/* <div className="nav-title">
              <b>Categories</b>
            </div>
            <ul className="nav nav-inbox">
              <li className="active">
                <select multiple className="form-select">
                  <option value="volvo">Technology</option>
                  <option value="Sports">Sports</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Politics">Politics</option>
                  <option value="Nation">Nation</option>
                </select>
              </li>
            </ul>
            <div className="nav-title">
              <b>LABEL</b>
            </div>
            <ul className="nav nav-inbox">
              <li>
                <Link to="/email/detail">
                  <i className="fa fa-fw fa-lg fs-12px me-2 fa-circle text-dark"></i>{" "}
                  Admin
                </Link>
              </li>
              <li>
                <Link to="/email/detail">
                  <i className="fa fa-fw fa-lg fs-12px me-2 fa-circle text-blue"></i>{" "}
                  Designer & Employer
                </Link>
              </li>
              <li>
                <Link to="/email/detail">
                  <i className="fa fa-fw fa-lg fs-12px me-2 fa-circle text-success"></i>{" "}
                  Staff
                </Link>
              </li>
              <li>
                <Link to="/email/detail">
                  <i className="fa fa-fw fa-lg fs-12px me-2 fa-circle text-warning"></i>{" "}
                  Sponsorer
                </Link>
              </li>
              <li>
                <Link to="/email/detail">
                  <i className="fa fa-fw fa-lg fs-12px me-2 fa-circle text-danger"></i>{" "}
                  Client
                </Link>
              </li>
            </ul> */}
          </PerfectScrollbar>
        </div>
      </div>
      <div className="mailbox-content">
        <div className="mailbox-content-header">
        <div className="btn-group" style={{ marginLeft: '550px', width:"18px" }}>
              <Link to={`/news/detail/${publicId}`} className="btn btn-white btn-sm">
                <i className="fa fa-fw fa-times"></i>
              </Link>
          </div>
          {/* <div className="btn-toolbar align-items-center">
						<div className="btn-group me-2">
							<Link to="/email/compose" className="btn btn-white btn-sm"><i className="fa fa-fw fa-envelope"></i> <span className="hidden-xs">Send</span></Link>
							<Link to="/email/compose" className="btn btn-white btn-sm"><i className="fa fa-fw fa-paperclip"></i> <span className="hidden-xs">Attach</span></Link>
						</div>
						<div>
							<a href="#/" className="btn btn-white btn-sm" data-bs-toggle="dropdown"><i className="fa fa-fw fa-ellipsis-h"></i></a>
							<div className="dropdown-menu dropdown-menu-end">
								<a href="#/" className="dropdown-item">Save draft</a>
								<a href="#/" className="dropdown-item">Show From</a>
								<a href="#/" className="dropdown-item">Check names</a>
								<a href="#/" className="dropdown-item">Switch to plain text</a>
								<a href="#/" className="dropdown-item">Check for accessibility issues</a>
							</div>
						</div>
						<div className="ms-auto">
							<Link to="/email/inbox" className="btn btn-white btn-sm"><i className="fa fa-fw fa-times"></i> <span className="hidden-xs">Discard</span></Link>
						</div>
					</div> */}
        </div>
        <div className="mailbox-content-body w-600px" style={{maxHeight: '65vh'}}>
            <form
              action="/"
              method="POST"
              name="email_to_form"
              className="mailbox-form"
            >
              <div className="mailbox-subject">
                <input
                  type="text"
                  value={updatedTitle || title}
                  className="form-control"
                  placeholder="Headline"
                  onChange={(evt)=>{
                    setUpdatedTitle(evt.target.value)
                  }}
                />
              </div>
              <div classNames={'mb-10px'}>
                <ReactTags
                  placeholderText="Add Tags"
                  allowNew={true}
                  selected={selectedTags}
                  suggestions={tagData}
                  onDelete={handleTagDelete}
                  onAdd={handleTagAdd}
                />
              </div>
                <ReactTags
                  placeholderText="Add Categories"
                  allowNew={true}
                  selected={selectedCategories}
                  suggestions={catgoriesData}
                  onDelete={handleCategoriesDelete}
                  onAdd={handleCatgoryAdd}
                />
              <div className="mailbox-input">
                <ReactQuill
                  value={updatedContent || content} 
                  className="border-0"
                  onChange={(content)=>{
                    console.log(content)
                    setUpdatedContent(content)
                  }}
                  style={{ height: editorHeight + "px", marginBottom: "20px" }}
                />
              </div>
            </form>
          <img src={'https://fastly.picsum.photos/id/582/536/354.jpg?hmac=yl_995o4eDi7GMlFYMZcpu_DHFYjuA0g83BuhpHyGiI'}/>
        </div>
        <div className="mailbox-content-footer d-flex align-items-center justify-content-end col-md-9">
          <div style={{ marginRight: '160px' }}>
            <button type="submit" className="btn btn-primary ps-40px pe-40px" onClick={editPost}>
              Save
            </button>
            <button type="submit" className="btn btn-white ps-40px pe-40px ms-2">
              <Link to="/news" className="text-decoration-none">
                Discard
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsEdit;
