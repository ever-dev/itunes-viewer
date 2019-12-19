import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getEntities } from '../../redux/actions';

import { MEDIA_TYPES } from '../../constants';

import { Header } from '../../components';
import { Container, Row, FormControl, Col } from 'react-bootstrap';
import { EntityContainer } from './components';

const Component = ({ entities, fetching, getEntities }) => {
  console.log(entities);
  const [selectedMediaType, setMediaType] = useState(MEDIA_TYPES[0].value);
  const [searchKey, setSearchKey] = useState('');

  return (
    <Container>
      <Header
        mediaTypes={MEDIA_TYPES}
        onMediaChange={e => {
          getEntities(e, searchKey);
          setMediaType(e);
        }}
        selectedMedia={selectedMediaType}
      />
      <Row>
        <Col xs={8} />
        <Col xs={4}>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2 mt-3"
            value={searchKey}
            onChange={e => {
              getEntities(selectedMediaType, e.target.value);
              setSearchKey(e.target.value);
            }}
          />
        </Col>
      </Row>
      <Row>
        <EntityContainer entities={entities} />
      </Row>
    </Container>
  );
};

const mapStateToProps = state => ({
  entities: state.entities,
  fetching: state.fetching
});

const mapDispatchToProps = dispatch => ({
  getEntities: (type, key) => dispatch(getEntities(type, key))
});

export const Home = connect(mapStateToProps, mapDispatchToProps)(Component);

Home.propTypes = {};
