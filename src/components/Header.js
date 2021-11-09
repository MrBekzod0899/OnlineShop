import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Card, CardBody, CardHeader, Col, Container,Form,Input,Row ,Table} from 'reactstrap'


export default class Header extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <>
              <Container>
                  <Row>
                  <Col className="col-md-4">
                          <Card className="bg-success">
                              <CardHeader>
                                  <h4>Add Student</h4>
                              </CardHeader>
                              <CardBody>
                                <Form className="form-group ">
                                        <label for="Fullname">Fullname</label>
                                        <Input placeholder="enter fullname" id="Fullname" className="form-control"/>
                                        <label for="cource">Cource</label>
                                        <Input placeholder="enter cource" id="cource" className="form-control"/>
                                        <label for="Start year">year</label>
                                        <Input placeholder="enter Start year" id="startYear" className="form-control"/>
                                        <label for="endYear">End Year</label>
                                        <Input placeholder="enter end year" id="endYear" className="form-control"/>
                                        <label for="Grade">Grade</label>
                                        <Input placeholder="enter Grade" id="Grade" className="form-control"/>
                                        <Button className="btn-primary mt-2">Add Student</Button>
                                </Form>
                              </CardBody>
                            
                          </Card>
                      </Col>
                      <Col className="col-md-8">
                          <Card className="">
                            <Table className="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Fullname</th>
                                        <th>Course</th>
                                        <th>Start Year</th>
                                        <th>graduated year</th>
                                        <th>GPA</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </Table>
                          </Card>
                      </Col>
                  </Row>
              </Container>
            </>
        )
    }
}
