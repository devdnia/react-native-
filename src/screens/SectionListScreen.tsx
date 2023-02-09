import React from 'react';
import { View, Text, SectionList } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { ItemSeparator } from '../components/ItemSepartor';
import { styles } from '../theme/appTheme';


interface Casas {
    casa: string;
    data: string[];
}

const casas: Casas[] = [
    {
        casa: "DC Comics",
        data: ["Batman", "Superman", "Robin",]
    },
    {
        casa: "Marvel Comics",
        data: ["Antman", "Thor", "Spiderman", "Antman",]
    },
    {
        casa: "Anime",
        data: ["Kenshin", "Goku", "Saitama",]
    }
];
export const CustomSectionList = () => {

    return (
        <View style={{ ...styles.globalMargin, flex: 1 }}>

            <SectionList
                sections={casas}
                keyExtractor={(item, index) => item + index}

                ListHeaderComponent={() => <HeaderTitle title='Section List' />}
                ListFooterComponent={() => (
                    <View style={{ marginBottom: 45 }}>
                        <HeaderTitle title={`Total de casas ${casas.length}`} />
                    </View>
                )}

                renderItem={({ item }) => <Text>{item}</Text>}
                renderSectionHeader={({ section }) => (
                    <View style={{ backgroundColor: 'white' }}>
                        <HeaderTitle title={section.casa} />
                    </View>
                )
                }
                stickySectionHeadersEnabled //Efecto scroll Android

                renderSectionFooter={ ({ section }) => (
                    <HeaderTitle title={`Total: ${ section.data.length}`} />
                )}

                SectionSeparatorComponent={ () => <ItemSeparator />}
                ItemSeparatorComponent={ () => <ItemSeparator />}

                showsHorizontalScrollIndicator={ false}
            />

        </View>
    )
};