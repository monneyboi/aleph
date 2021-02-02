import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import c from 'classnames';
import { Link } from 'react-router-dom';
import { Callout, Icon } from '@blueprintjs/core';

import { Entity } from 'components/common';
import getEntityLink from 'util/getEntityLink';


import './ProfileCallout.scss';

const ProfileCallout = ({ entity, profile, viaEntityId }) => {
  if (profile) {
    return (
      <Callout icon="layers" className="ProfileCallout">
        <p>
          <strong>
            <FormattedMessage
              id="profile.items.intro"
              defaultMessage={"You're viewing {entity} as a profile. "}
              values={{
                entity: <Entity.Label entity={profile.entity} />,
              }}
            />
          </strong>
        </p>
        <p>
          <FormattedMessage
            id="profile.items.intro"
            defaultMessage={"The profile aggregates attributes and relationships from {count} entities across different datasets. You can select which source entities to include in the list below. "}
            values={{
              count: profile.entities ? profile.entities.length : 0,
            }}
          />
        </p>
        {viaEntityId && (
          <p>
            <FormattedMessage
              id="profile.items.intro"
              defaultMessage={"View the <link>original entity</link>."}
              values={{
                link: chunks => <Link to={getEntityLink(viaEntityId, false)}>{chunks}</Link >,
              }}
            />
          </p>
        )}
      </Callout>
    )
  }

  return (
    <Callout icon="layers" className="ProfileCallout">
      <FormattedMessage
        id="profile.items.intro"
        defaultMessage={"{entity} has been combined with entities from other datasets <link>into a profile</link>"}
        values={{
          entity: <Entity.Label entity={entity} />,
          link: chunks => <Entity.Link entity={entity}>{chunks}</Entity.Link>,
        }}
      />
      <Entity.Link entity={entity}><Icon icon="arrow-right" /></Entity.Link>
    </Callout>
  );
}

export default injectIntl(ProfileCallout);
