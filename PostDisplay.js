import React, { Component } from 'react'
// import Container from 'react-bootstrap/Container'
// import Card from 'react-bootstrap/Card'
// import {Row, Col} from 'react-bootstrap'

class PostDisplay extends Component {
    render() {
        const {mobile} = this.props;
        const posts = mobile.filter(item => {
            if(Object.keys(item).includes('posts')){
                return item;
            }
        })
        console.log("posts", posts)
        let r1;
        return (
            <div>
            <ul>
                {
                 posts.map(item =>{
                     console.log('item- ',item)
                     r1 = <li key={item.posts.id}> {item.posts.title} -{item.posts.desc} </li> 
                    //  return(
                    //  <li key={item.id}> {item.title} -{item.desc} </li>
                    //  )
                    return r1
                 })   
                }
            {/* {
                this.props.mobile.map((p,id)=>{
                    if(id%2!==0) {
                        p.posts.map(k => {
                            console.log('posts ke andar aa gaye - ',k.title,k.desc)
                            r1 = <li>{k.title} - {k.desc}</li>  
                            // return(<li>{k.title} - {k.desc}</li>)
                        })
                        return r1;
                    }
                    else{
                        return(<li>Name - {p.fname}, Email - {p.email}</li>)
                    }
                })
            } */}
            {/* {this.props.mobile.map(p=>{
                    if(Object.keys(p)==='posts'){
                        {
                            p.posts.map(p1=>{
                                r1 = <li>{p1.title} - {p1.desc}</li>
                                console.log(r1)
                                return r1
                            })   
                        }                       
                    }
                    return <li>Name -{p.fname}, Email -{p.email} </li>
                    }
                )
            } */}
        {/* {this.props.mobile.map((p,id)=>{
                    p.posts.map(p1=>{
                        r1 = <span key={p1.id}>{p1.title} -{p1.desc}</span>
                        // return(<b key={p1.id}>{p1.title} -{p1.desc}</b>)  
                        })
                    return(<li><b>Name -{p.name}, Email -{p.email}{r1}</b></li>)    
                })}
             */}
            
            
            </ul>
            </div>
                
            
    
             
            // </ul>
            // </div>
                /* {this.props.mobile.map(p=>{
                    let fname = p.fname;
                    let email = p.email;
                    let j = p.posts;
                    j.map(p1=>{
                        return(
                            <li key={p1.id}><b>{p1.title} :- </b>{p1.desc}<br/>
                            By:- {fname}</li>
                            )}
                        )   
                    })
                }
            </ul>
            </div> */
            // <>
            //     <Container>
            //     {this.props.mobile.map(p=>{
            //         return ( 
            //         <Row>
            //         <Col> 
            //         <Card  border="danger" style={{ width: '15rem' }}>
            //         <Card.Header>{p.posts.title}</Card.Header>
            //         <Card.Body>
            //         <Card.Text>{p.posts.desc}</Card.Text>
            //         <Card.Link href="#">Like</Card.Link>
            //         <Card.Link href="#">Dislike</Card.Link>
            //         <Card.Link href="#">Save</Card.Link>
            //         </Card.Body>
            //         </Card>
            //         </Col>
            //         </Row>
            //         )
            //         })
            //     }
            //     </Container>
            // </>
        )
    }
}

export default PostDisplay


            /* <ul>
                {this.props.posts.map(p=>{
                    return(
                    <li key={p.id}><b>{p.title} :- </b>{p.desc}</li>
                    )}
                )}
                </ul> */