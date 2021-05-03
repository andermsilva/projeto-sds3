import DataTable from 'components/DataTable';
import Footer from 'components/Footer';
import NavBAr from 'components/NavBar';
import React from 'react';


function App() {
  return (
    <>
      <NavBAr />
      <div className="container" >
        <h1 className="text-primary">
          Ola Mundo
        </h1>
        <DataTable />

      </div>
      <Footer />
    </>
  );
}

export default App;
