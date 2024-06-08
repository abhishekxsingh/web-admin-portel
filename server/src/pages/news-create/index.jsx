import React, { useEffect, useContext, useState } from "react";
import { ReactTags } from "react-tag-autocomplete";
import ReactQuill from "react-quill";
import { Link } from "react-router-dom";
import { AppSettings } from "../../config/app-settings";

function EmailCompose() {
  const context = useContext(AppSettings);
  const [isMobileEmailNavOn, setIsMobileEmailNavOn] = useState(false);
  const [tags, setTags] = useState([]);
  const [categories, setCategories] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [categoriesSuggestions, setCategoriesSuggestions] = useState([]);
  const [text, setText] = useState("");
  const [editorHeight, setEditorHeight] = useState(0);

  useEffect(() => {
    context.handleSetAppContentFullHeight(true);
    context.handleSetAppContentClass("p-0");

    setTags([{ value: 1, label: "breaking news" }]);
    setCategories([{ value: 1, label: "Technology" }])

    setSuggestions([
      { value: 1, label: "breaking news" },
      { value: 2, label: "trending news" },
    ]);

    setCategoriesSuggestions([
      { value: 1, label: "Technology" },
      { value: 2, label: "Politics" },
    ]);

    setEditorHeight(window.innerHeight > 600 ? window.innerHeight - 415 : 900);

    return () => {
      context.handleSetAppContentFullHeight(false);
      context.handleSetAppContentClass("");
    };
    // eslint-disable-next-line
  }, []);

  function toggleMobileEmailNav() {
    setIsMobileEmailNavOn(!isMobileEmailNavOn);
  }

  function handleTagAdd(newTag) {
    setTags([...tags, newTag]);
  }

  function handleTagDelete(tagIndex) {
    setTags(tags.filter((_, i) => i !== tagIndex));
  }

  function handleCategoriesAdd(newTag) {
    setCategories([...categories, newTag]);
  }

  function handleCategoriesDelete(tagIndex) {
    setCategories(categories.filter((_, i) => i !== tagIndex));
  }

  function handleChange(value) {
    setText(value);
  }

  return (
    <div className="mailbox">
      <div className="sidebar col-md-4">
        {/* <NewsContent content={convert(text)}/> */}
        {/* <div className="mailbox-sidebar-header d-flex justify-content-center">
          <button
            onClick={toggleMobileEmailNav}
            className="btn btn-dark btn-sm me-auto d-block d-lg-none"
          >
            <i className="fa fa-cog"></i>
          </button>
          <Link
            to="/email/compose"
            className="btn btn-dark ps-40px pe-40px btn-sm"
          >
            Compose
          </Link>
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
            <div className="nav-title">
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
            </ul>
          </PerfectScrollbar>
        </div> */}
      </div>
      <div className="mailbox-content col-md-8 mt-3 pt-2">
        {/* <div className="mailbox-content-header">
          <div className="btn-toolbar align-items-center">
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
					</div>
        </div> */}
        <div className="mailbox-content-body w-600px" style={{maxHeight: '50vh'}}>
          {/* <PerfectScrollbar
            className="h-100"
            options={{ suppressScrollX: true }}
          > */}
            <form
              action="/"
              method="POST"
              name="email_to_form"
              className="mailbox-form"
            >
              {/* <div className="mailbox-to">
								<label className="control-label">To:</label>
								<span className="mailbox-float-link">
									{!cc && <Link to="/email/compose" onClick={handleCc} className="me-5px">Cc</Link>}
									{!bcc && <Link to="/email/compose" onClick={handleBcc}>Bcc</Link>}
								</span>
							</div> */}
              {/* {cc &&
								<div className="mailbox-to">
									<label className="control-label">Cc:</label>
									<ReactTags placeholderText="Add Cc Email" allowNew={true} selected={tagsCc} suggestions={suggestions} onDelete={handleTagCcDelete} onAdd={handleTagCcAdd} />
								</div>
							} */}
              <div className="mailbox-subject">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Headline"
                />
              </div>
              <div classNames={'mb-10px'}>
                <ReactTags
                  placeholderText="Add Tags"
                  allowNew={true}
                  selected={tags}
                  suggestions={suggestions}
                  onDelete={handleTagDelete}
                  onAdd={handleTagAdd}
                  style={{
                    zIndex: 200
                  }}
                />
              </div>
              <ReactTags
                placeholderText="Add Categories"
                allowNew={true}
                selected={categories}
                suggestions={categoriesSuggestions}
                onDelete={handleCategoriesDelete}
                onAdd={handleCategoriesAdd}
              />
              <div className="mailbox-input">
                <ReactQuill
                  value={text}
                  className="border-0"
                  onChange={handleChange}
                  style={{ height: editorHeight + "px", marginBottom: "20px" }}
                />
              </div>
            </form>
          {/* </PerfectScrollbar> */}
        </div>

        <div className="mailbox-content-footer d-flex align-items-center justify-content-between col-md-9">
            <button className="btn btn-white btn-sm">
              <i className="fa fa-fw fa-paperclip"></i>{" "}
              <span className="hidden-xs">Attach</span>
            </button>
            <div>
            <button type="submit" className="btn btn-white ps-20px pe-20px ms-2">
                Test Now
              </button>
              <span style={{ margin: "0 4px" }}></span>
              <button type="submit" className="btn btn-primary ps-40px pe-40px ">
                Save
              </button>
              <button type="submit" className="btn btn-white ps-40px pe-40px ms-2 ">
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

export default EmailCompose;
