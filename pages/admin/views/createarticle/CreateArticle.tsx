import {
  CButton,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTabPane,
} from "@coreui/react";
import { GetStaticProps } from "next";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "universal-cookie";
const Modal = ({
  visible,
  setVisible,
  type,
  dataEdit,
  isRefresh,
  setRefresh,
}) => {
  const cookies = new Cookies();
  const [data, setdata] = useState({
    id: "",
    title: "",
    image: [],
    description: "",
    tag: "",
    type: true,
    link: "",
  });

  useEffect(() => {
    if (type === "edit") {
      console.log(dataEdit);
      setdata({
        id: dataEdit._id,
        title: dataEdit.title,
        image: dataEdit.image,
        description: dataEdit.description,
        tag: dataEdit.tag,
        link: dataEdit.link,
        type: dataEdit.type,
      });
    } else {
      setdata({
        id: "",
        title: "",
        image: [],
        description: "",
        tag: "",
        type: true,
        link: "",
      });
    }
  }, [type]);

  const handleSubmit = async () => {
    try {
      const postData = await fetch("http://localhost:3000/api/admin/article", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookies.get("token")}`,
        },
        method: "POST",
        body: JSON.stringify(data),
      });

      setRefresh(!isRefresh);
    } catch (error) {
      throw error;
    }
  };
  const handleEdit = async () => {
    try {
      const postData = await fetch("http://localhost:3000/api/admin/article", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookies.get("token")}`,
        },
        method: "PUT",
        body: JSON.stringify(data),
      });
      setRefresh(!isRefresh);
    } catch (error) {
      throw error;
    }
  };

  const saveData = async () => {
    if (type === "edit") {
      handleEdit();
    } else {
      handleSubmit();
    }

    setVisible(false);
  };

  return (
    <CModal visible={visible} onClose={() => setVisible(false)}>
      <CModalHeader onClose={() => setVisible(false)}>
        <CModalTitle>Create Article</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm>
          {type === "edit" ? (
            <></>
          ) : (
            <CFormSelect
              aria-label="Default select example"
              options={[
                { label: "Create Article", value: "true" },
                { label: "Copy Link", value: "false" },
              ]}
              onChange={(e) => {
                if (e.target.value === "true") {
                  return setdata({
                    ...data,
                    type: true,
                  });
                }
                return setdata({
                  ...data,
                  type: false,
                });
              }}
            />
          )}

          {data.type ? (
            <>
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">
                  title
                </CFormLabel>
                <CFormInput
                  type="text"
                  id="title"
                  value={data.title}
                  placeholder="title"
                  onChange={(e) =>
                    setdata({
                      ...data,
                      title: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">Tag</CFormLabel>
                <CFormInput
                  type="text"
                  value={data.tag}
                  id="tag"
                  placeholder="Tag Article"
                  onChange={(e) =>
                    setdata({
                      ...data,
                      tag: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">
                  Image
                </CFormLabel>
                <CFormInput
                  type="text"
                  id="image"
                  value={data.image}
                  placeholder="link image"
                  onChange={(e) =>
                    setdata({
                      ...data,
                      image: [e.target.value],
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlTextarea1">
                  Description
                </CFormLabel>
                <CFormTextarea
                  id="exampleFormControlTextarea1"
                  rows="3"
                  value={data.description}
                  onChange={(e) =>
                    setdata({
                      ...data,
                      description: e.target.value,
                    })
                  }
                ></CFormTextarea>
              </div>
            </>
          ) : (
            <>
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">
                  Title
                </CFormLabel>
                <CFormInput
                  type="text"
                  id="image"
                  value={data.title}
                  placeholder="link article"
                  onChange={(e) =>
                    setdata({
                      ...data,
                      title: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">
                  Link Article
                </CFormLabel>
                <CFormInput
                  type="text"
                  id="image"
                  value={data.link}
                  placeholder="link article"
                  onChange={(e) =>
                    setdata({
                      ...data,
                      link: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">
                  Image
                </CFormLabel>
                <CFormInput
                  type="text"
                  id="image"
                  value={data.image}
                  placeholder="link image"
                  onChange={(e) =>
                    setdata({
                      ...data,
                      image: [e.target.value],
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">Tag</CFormLabel>
                <CFormInput
                  type="text"
                  value={data.tag}
                  id="tag"
                  placeholder="Tag Article"
                  onChange={(e) =>
                    setdata({
                      ...data,
                      tag: e.target.value,
                    })
                  }
                />
              </div>
            </>
          )}
          <CModalFooter>
            <CButton color="secondary" onClick={() => setVisible(false)}>
              Close
            </CButton>
            <CButton type={"button"} color="primary" onClick={saveData}>
              Save changes
            </CButton>
          </CModalFooter>
        </CForm>
      </CModalBody>
    </CModal>
  );
};

interface TableTrueProps {
  state: any;
  type: Boolean;
  delete: () => void;
}
const TableTrue = ({ state, type, deleteFunction, editFuntion }) => {
  const filterArray = state.data.article.filter((item) => item.type === type);

  return (
    <CTable color="dark" striped>
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell scope="col">#</CTableHeaderCell>
          <CTableHeaderCell scope="col">Judul</CTableHeaderCell>
          <CTableHeaderCell scope="col">Tag</CTableHeaderCell>
          <CTableHeaderCell scope="col" className={"text-center"}>
            Aksi
          </CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        {filterArray.map((article, index) =>
          type === true ? (
            <>
              <CTableRow>
                <CTableDataCell scope={"row"}>{index + 1}</CTableDataCell>
                <CTableDataCell>{article.title}</CTableDataCell>
                <CTableDataCell>{article.tag}</CTableDataCell>
                <CTableDataCell className={"text-center"}>
                  <CButton
                    color="primary"
                    onClick={(e) => editFuntion(e, article)}
                  >
                    Edit
                  </CButton>
                  <CButton
                    color="danger"
                    onClick={(e) => deleteFunction(e, article)}
                  >
                    Delete
                  </CButton>
                </CTableDataCell>
              </CTableRow>
            </>
          ) : (
            <>
              <CTableRow>
                <CTableDataCell scope={"row"}>{index + 1}</CTableDataCell>
                <CTableDataCell>{article.link}</CTableDataCell>
                <CTableDataCell>{article.tag}</CTableDataCell>
                <CTableDataCell className={"text-center"}>
                  <CButton
                    color="primary"
                    onClick={(e) => editFuntion(e, article)}
                  >
                    Edit
                  </CButton>
                  <CButton
                    color="danger"
                    onClick={(e) => deleteFunction(e, article)}
                  >
                    Delete
                  </CButton>
                </CTableDataCell>
              </CTableRow>
            </>
          )
        )}
      </CTableBody>
    </CTable>
  );
};

const CreateArticle = () => {
  const [refresh, setrefresh] = useState(false);
  const [showModal, setshowModal] = useState(false);
  const [type, settype] = useState("");
  const [data, setdata] = useState({});
  const state = useSelector((state) => state);
  const cookies = new Cookies();
  const dispatch = useDispatch();

  const edit = (e, article) => {
    settype("edit");

    setdata(article);
    setshowModal(true);
    e.preventDefault();
  };
  const create = (e, article) => {
    settype("create");

    setshowModal(true);
  };
  const getData = async () => {
    try {
      const postData = await fetch("/api/admin/article", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookies.get("token")}`,
        },
      });
      const res = await postData.json();
      dispatch({
        type: "SET_ARTICLE",
        article: [...res],
      });
    } catch (error) {
      throw error;
    }
  };
  const deleteArticle = async (e, article) => {
    try {
      const postData = await fetch(`/api/admin/article`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookies.get("token")}`,
        },
        method: "DELETE",
        body: JSON.stringify({ id: article._id }),
      });
      getData();
    } catch (error) {
      throw error;
    }
  };
  const [activeKey, setActiveKey] = useState(1);
  useEffect(() => {
    getData();
    console.log(refresh);
  }, [refresh]);
  return (
    <>
      <CButton color="primary" className={"mb-2"} onClick={create}>
        Create New
      </CButton>
      <CNav variant="tabs" role="tablist">
        <CNavItem>
          <CNavLink
            href="javascript:void(0);"
            active={activeKey === 1}
            onClick={() => setActiveKey(1)}
          >
            Article by Talenta
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink
            href="javascript:void(0);"
            active={activeKey === 2}
            onClick={() => setActiveKey(2)}
          >
            Article by Link
          </CNavLink>
        </CNavItem>
      </CNav>
      <CTabContent>
        <CTabPane
          role="tabpanel"
          aria-labelledby="home-tab"
          visible={activeKey === 1}
        >
          <TableTrue
            state={state}
            type={true}
            deleteFunction={deleteArticle}
            getdata={getData}
            editFuntion={edit}
          />
        </CTabPane>
        <CTabPane
          role="tabpanel"
          aria-labelledby="profile-tab"
          visible={activeKey === 2}
        >
          <TableTrue
            state={state}
            editFuntion={edit}
            type={false}
            deleteFunction={deleteArticle}
            getdata={getData}
          />
        </CTabPane>
      </CTabContent>

      <Modal
        visible={showModal}
        setVisible={setshowModal}
        type={type}
        dataEdit={data}
        isRefresh={refresh}
        setRefresh={setrefresh}
      />
    </>
  );
};
export default CreateArticle;
