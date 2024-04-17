import PropTypes from 'prop-types';

const LinkManager = (path, config, context) => {

  if (!path) return '';

  const pos = path.split('/');
  const pos3 = pos.pop();
  const pos2 = pos.pop();
  const pos1 = pos.pop();

  if (path.indexOf('/experience-fragments/') >= 0) {
    path = `/site/en/${pos1}/${pos2}/${pos3}`;
  } else if (config && path.indexOf(config.adventuresHome) === 0) {

    let v = config.adventuresHome.indexOf('/') == 0 ?
      config.adventuresHome.substring(1, config.adventuresHome.length) :
      config.adventuresHome;
    v = v.replace('content/dam', '');
    let arry = v.split('/');
    arry.shift();
    arry.shift();
    path = `${context.project}/${arry.join('/')}/${pos2}/${pos3}`;
    // } else {
    //   path = path.replace(`/${rootPath}/${context.project}`, '');
    // }

    return (
      path
    );
  }
};

LinkManager.propTypes = {
  path: PropTypes.object,
  config: PropTypes.object,
  context: PropTypes.object
};

export default LinkManager;