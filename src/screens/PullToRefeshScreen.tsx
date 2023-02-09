import React, { useContext } from 'react';
import { View, Text, ScrollView, RefreshControl } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const PullToRefreshScreen = () => {

  // const {top} = useSafeAreaInsets()

  const [isrefreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();
  const { theme:{colors}} = useContext( ThemeContext );

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      console.log('Terminamos');
      setRefreshing(false);
      setData('Hola mundo');
    }, 1500)
  }

  return (
    <ScrollView
      style={{
        // marginTop: isrefreshing ? top : 0
      }}
      refreshControl={
        <RefreshControl
          refreshing={isrefreshing}
          onRefresh={onRefresh}
          progressViewOffset={10} // Android TouchBar
          progressBackgroundColor= { colors.primary }
          colors={ ['white', 'red', 'orange']} // Android
          style={{ backgroundColor: colors.primary }} // iOs
          tintColor="white" // iOs
          title='cargando' // iOs
          titleColor='white'
        />

      }
    >
      <View style={styles.globalMargin}>
        <HeaderTitle title="Pull to refresh" />

        {
          data && <HeaderTitle title={data} />
        }

      </View>
    </ScrollView>

  )
};