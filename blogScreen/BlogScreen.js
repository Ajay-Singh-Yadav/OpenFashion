import React from 'react';
import {View, Text} from 'react-native';
import TopBarComp from './components/TopBarComp';
import BlogScreenComp from './components/BlogScreenComp';

const BlogScreen = () => {
  return (
    <View>
      <TopBarComp />
      <BlogScreenComp />
    </View>
  );
};

export default BlogScreen;
