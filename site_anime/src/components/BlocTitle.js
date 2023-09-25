import React from 'react';

const BlocTitle = (props) => {
    const { titre, taille, hauteur } = props;

    const cadreStyle = {
        border: '1px solid rgba(0, 0, 0, 0.2)', // Cadre avec transparence
        padding: '10px',
        borderRadius: '5px',
        backgroundColor: 'rgba(255, 255, 255, 0.7)', // Fond avec transparence
        width: taille || '300px', // Taille par défaut de 300px si non spécifiée
        height: hauteur || '200px', // Taille par défaut de 200px si non spécifiée
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
    };

    return (
        <div style={cadreStyle}>
            <h1>{titre}</h1>
        </div>
    );
};

export default BlocTitle;
