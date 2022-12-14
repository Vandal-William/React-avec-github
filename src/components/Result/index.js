// == Composant
import { Card, Image, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './style.scss';

function Result({
  title,
  subtitle,
  description,
  image,
  link,
  auther,
}) {
  return (
    <Card className="card">
      <Image className="card-image" src={image} wrapped ui={false} />
      <Card.Content className="description">
        <Card.Header>{title}</Card.Header>
        <Card.Meta>{subtitle}</Card.Meta>
        <Card.Description>
          {description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra className="extra">
        <a href={link} target="__blanc">
          <Icon name="user" />
          Repos GitHub
        </a>
        {auther && (
          <a href={auther} target="__blanc">
            <Icon name="user" />
            Home page
          </a>
        )}
      </Card.Content>
    </Card>
  );
}

Result.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  auther: PropTypes.string,
};
Result.defaultProps = {
  subtitle: '',
  auther: '',
};
// == Export
export default Result;
