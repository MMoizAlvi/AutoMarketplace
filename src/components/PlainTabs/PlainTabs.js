import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-re-super-tabs';
import cns from 'classnames';
import PropTypes from 'prop-types';

import css from './PlainTabs.module.css';

function PlainTabs(props) {
  const { data, menuListClass } = props;
  const menu = data.map(i => ({ label: i.label, id: i.id, handleActive:i.handleActive }));
  const content = data.map(i => ({ id: i.id, content: i.content }));
  return (
    <Tabs activeTab={menu[0].id} >
      <TabList className={cns(css.tabLabels, menuListClass || '')}>
        {menu.map(item => (
          <Tab
            key={item.id}
            component={({ children, isActive }) => {
              return(
                <div
                  className={cns(css.tabLabelItem, isActive && css.tabLabelItemActive)}
                  onClick = {() => item.handleActive.handleActive(item.id)}>
                  {item.label}
                </div>
              )
            }}
            id={item.id}
          />
        ))}
      </TabList>
      <TabList>
        {content.map(item => (
          <TabPanel key={item.id} component={() => <div>{item.content}</div>} id={item.id} />
        ))}
      </TabList>
    </Tabs>
  );
}

PlainTabs.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      content: PropTypes.oneOfType([PropTypes.element, PropTypes.oneOf([null])]),
    })
  ),
  menuListClass: PropTypes.string,
};
export default PlainTabs;
