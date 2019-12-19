import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import { Entity } from '../../../../components';

export const EntityContainer = ({ entities }) => {
  console.log(entities);
  return (
    <>
      {entities.map((entity, index) => (
        <Col xs={12} sm={6} md={6} lg={4} key={index} className="mt-3">
          <Entity entity={entity} />
        </Col>
      ))}
    </>
  );
};

EntityContainer.protoTypes = {
  entities: PropTypes.arrayOf(PropTypes.object)
};
