import React from 'react';

export default function PageAnimation({ e }) {
  return (
    <div className="page_Animation">
      {e.e.capas.uno !== '' && (
        <div
          className="capa capa_uno"
          style={{
            backgroundImage: `url(${e.e.capas.uno ? e.e.capas.uno : null})`,
          }}
        ></div>
      )}
      <div className="veladura"></div>
      {e.e.capas.dos !== '' && (
        <div
          className="capa capa_dos"
          style={{
            backgroundImage: `url(${e.e.capas.dos ? e.e.capas.dos : null})`,
          }}
        ></div>
      )}
      {e.e.capas.tres !== '' && (
        <div
          className="capa capa_tres"
          style={{
            backgroundImage: `url(${e.e.capas.tres ? e.e.capas.tres : null})`,
          }}
        ></div>
      )}
      {e.e.capas.cuatro !== '' && (
        <div
          className="capa capa_cuatro"
          style={{
            backgroundImage: `url(${
              e.e.capas.cuatro ? e.e.capas.cuatro : null
            })`,
          }}
        ></div>
      )}
      {e.e.capas.cinco !== '' && (
        <div
          className="capa capa_cinco"
          style={{
            backgroundImage: `url(${e.e.capas.cinco ? e.e.capas.cinco : null})`,
          }}
        ></div>
      )}
    </div>
  );
}
