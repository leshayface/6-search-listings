import React, {useState} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './Animations.css';


const FormContainer = styled.div`
  position: relative;
  margin: 40px;
`;

const SearchContainer = styled.form`
  height: 60px;
  display: flex;
`;

const SearchTitleInput = styled.input`
  box-sizing: border-box;
  padding: 0 40px 0 10px;
  height: 50px;
  border: 4px solid #000;
  background: none;
  color: #000;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  border-radius: 4px;
  margin: 8px;

  ::placeholder {
    color: #000;
    opacity: 0.8;
  }
`;

const SelectCategory = styled.select`
  box-sizing: border-box;
  padding: 0 40px 0 10px;
  height: 50px;
  border: 4px solid #000;
  background: none;
  color: #000;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  border-radius: 4px;
  margin: 8px;
`;

const SearchButton = styled.button`
  background: none;
  width: 80px;
  height: 80px
  margin: 8px;
`;

const SearchIcon = styled(FontAwesomeIcon)`
  width: 30px !important;
  height: 30px;
  font-family: Roboto;
  color: #000;
  vertical-align: bottom;
`;

const LargeSearchIcon = styled(FontAwesomeIcon)`
  bottom: 50px;
  color: #000;
  width: 60px !important;
  height: 60px;
`;

const SearchForm = ({searchTitle, updateSearchTitle, searchCat, updateSearchCat, updateSearchValue} : {searchTitle:any, updateSearchTitle:any, updateSearchValue:any, searchCat:any, updateSearchCat:any}) => {
  const [onShrink, setOnShrink] = useState(false);
  const [afterShrink, setAfterShrink] = useState(false);

  const onShrinkChange = () => {
    setOnShrink(true);
    afterShrinkChange();
  }

  const afterShrinkChange = () => {
    setTimeout(() => {
      setAfterShrink(true)
    }, 400);
  }

  const searchContainerStyle = () => {
    return {
      display: afterShrink ? "block" : "none",
      animationName: afterShrink && "slideInFromLeft",
      animationDuration: afterShrink && "1s",
      animationTimingFunction: afterShrink && "ease-out",
      animationFillMode: afterShrink && "forwards",
    } as React.CSSProperties;
   };

   const largeSearchIconStyle = () => {
    return {
      display: afterShrink ? "none" : "block",
      animationName: onShrink && "shrink",
      animationDuration: onShrink && "1s", 
      animationTimingFunction: onShrink && "ease-out",
      animationFillMode: "forwards",
    } as React.CSSProperties;
   }

  return (
    <FormContainer className="formContainer">
      <SearchContainer style={searchContainerStyle()} onSubmit={updateSearchValue}>
        <SearchTitleInput type="text" value={searchTitle} placeholder="Title" onChange={updateSearchTitle}/>
        <SelectCategory value={searchCat} onChange={updateSearchCat}>
          <option value="">Select A Category</option>
          <option value="Furniture">Furniture</option>
          <option value="Electronics">Electronics</option>
          <option value="Cars">Cars</option>
          <option value="Property">Property</option>
        </SelectCategory>
        <SearchButton type="submit" ><SearchIcon icon={faSearch} /></SearchButton>
      </SearchContainer>
      <LargeSearchIcon style={largeSearchIconStyle()} icon={faSearch} onClick={onShrinkChange} />
    </FormContainer>
   );
}
 
export default SearchForm;
