import React, { useState } from 'react';
import './Home.css';
import logo from './img/logo.png';
import { FaRegUserCircle } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
import { FaBars } from "react-icons/fa"; 
import Modal from './Modal';

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment('');
      toggleModal();
    }
  };

  return (
    <>
      <div className='geral'>
        <div className='naveBar'>
          <FaBars className='menu-icon' onClick={toggleMenu} />
          <h1 className='Titulo'>Booksula: A bússola para suas resenhas!</h1>
        </div>
        {menuOpen && (
          <div className='menu'>
            <p>Página do usuário/Feed</p>
            <p>Meu perfil</p>
            <p>Meus amigos</p>
            <p>Adicionar amigos</p>
            <p>Buscar</p>
          </div>
        )}
        <div className='Logo_div'>
          <img className='Logo' src={logo} alt="Logo" />
        </div>
        <div className='Conteudo'>
          <div className='Metade'>
            <p className='texto1'>Booksula é uma plataforma</p>
            <p className='texto2'>digital desenvolvida pelos</p>
            <p className='texto3'>trainnees WolfByte de extensão</p> 
            <p className='texto4'>IEEE e visa ser um ambiente</p>
            <p className='texto5'>acolhedor e confortável para</p> 
            <p className='texto6'>o público de leitores</p>
            <p className='texto7'>compartilharem suas</p>
            <p className='texto8'>resenhas e se conectarem</p>
            <p className='texto9'>com usuários de vários</p>
            <p className='texto10'>lugares diferentes.</p>
          </div>
          <div className='Conteudo-direita'>
            <div className='Central'>
              <div className='sub-navebar'>
                <button className='button-20'>Cadastre-se</button>
                <button className='button-20'>Login</button>
              </div>
              <div className='Titulo02'>
                <h3 className='Titulo_central'>Venha ver as resenhas dos nossos usuários:</h3>
              </div>
              <div className='caixão'>
                {comments.map((comment, index) => (
                  <div key={index} className='caixa1'>
                    <div className='Nome1'>
                      <h3 className='caixinha'>
                        <FaRegUserCircle className="custom-icon" /> Nome do Usuário
                      </h3>
                      <h3 className='data1'>Data da publicação</h3>
                      <h3 className='obra'>Nome da obra</h3>
                    </div>
                    <div className='Previa1'>
                      <h3 className='caixinha'>
                        <BsPencilSquare className="custom-icon" />{comment}
                      </h3>
                    </div>
                  </div>
                ))}
                <div className='caixa1'>
                  <div className='Nome1'>
                    <button className='button-20' onClick={toggleModal}>Adicionar comentário</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal show={modalOpen} onClose={toggleModal}>
        <h2>Adicionar Comentário</h2>
        <textarea 
          placeholder="Escreva seu comentário aqui..." 
          rows="4" 
          cols="50" 
          value={comment}
          onChange={handleCommentChange}
        ></textarea>
        <button className='button-20' onClick={handleCommentSubmit}>Enviar</button>
      </Modal>
    </>
  );
}

export default Home;
