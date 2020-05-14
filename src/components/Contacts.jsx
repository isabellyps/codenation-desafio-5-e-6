import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  contactsResultItems: [],
		};
	  }
	
	  changeContacts() {
		ApiService.ListContacts().then((res) => {
		  const contactsMap = res.map((item) => {
			return <Contact key={item.id} data={item} />;
		  });
		  this.setState({ contactsResultItems: [""] });
		  this.setState({
			contactsResultItems: [
			  ...this.state.contactsResultItems,
			  ...contactsMap,
			],
		  });
		});
	  }
	
	  componentDidMount() {
		this.changeContacts();
	  }
	
	  render() {
		return (
		  <div className="container" data-testid="contacts">
			<section className="contacts">
			  <article className="contact">
				<span className="contact__avatar" />
				<span className="contact__data">Nome</span>
				<span className="contact__data">Telefone</span>
				<span className="contact__data">País</span>
				<span className="contact__data">Admissão</span>
				<span className="contact__data">Empresa</span>
				<span className="contact__data">Departamento</span>
			  </article>
			  {this.state.contactsResultItems}
			</section>
		  </div>
		);
	  }
}

export default Contacts;
