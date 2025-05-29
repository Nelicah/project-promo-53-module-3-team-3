function BtnFiles (){
    return (     
        <>
         <label className="button">
              Subir foto del proyecto
              <input className="addForm__hidden" type="file" />
            </label>
            <label className="button">
              Subir foto de la autora
              <input className="addForm__hidden" type="file" />
            </label>
            </>);
}
export default BtnFiles;