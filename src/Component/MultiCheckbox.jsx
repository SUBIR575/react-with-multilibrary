import axios from "axios";
import React, { useState, useEffect } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import {motion} from 'framer-motion'
const MultiCheckbox = () => {
  const [first, setfirst] = useState();
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  let apidata = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    },
    {
      id: 2,
      name: "Leanne",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    },
  ];
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setfirst(res?.data));
  }, []);
  useEffect(() => {
    if (apidata?.length === 1) {
      setData(apidata);
    }
  }, [data]);
  console.log({ data });
  return (
    <>
      <motion.div initial={{ opacity: 1 }}
       animate={{ width: "100%" }}
       exit={{ x: window.innerWidth, transition:{duration:0.1}}} style={{height:'100vh',backgroundColor:'#D3D3D3'}}
       className='main'>
        <Form.Control
          type="text"
          placeholder="DEMO"
          onClick={() => handleShow()}
        />
        {data.filter((i) => i.id === 1)[0] ? <input type="text"></input> : null}
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {apidata
              ? apidata.map((i) => (
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                      type="checkbox"
                      label={i?.name}
                      value={i?.id}
                      checked={
                        apidata?.length === 1
                          ? true
                          : data.filter((item) => item?.id === i?.id)[0]
                          ? true
                          : false
                      }
                      disabled={apidata?.length === 1 ? true : false}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setData([...data, i]);
                        } else {
                          const filter = data.filter(
                            (item) => item?.id !== i?.id
                          );
                          setData(filter);
                        }
                      }}
                    />
                  </Form.Group>
                ))
              : null}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </motion.div>
    </>
  );
};

export default MultiCheckbox;
