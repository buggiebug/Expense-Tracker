import { selectUserDetails } from '@/redux/reselect/reselectData';
import { ScrollView, useWindowDimensions } from 'react-native';
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux';



export default TransactionOverview = ({ expenseStats }) => {
    const { userData } = useSelector(selectUserDetails);
    const { width } = useWindowDimensions();
    const isLargeScreen = width < 480;

    return (
        <ScrollView horizontal={true}>
            <View style={[styles.transactionOverview, { width: isLargeScreen ? 600 : 650 }]}>
                <View style={styles.section}>
                    <View style={styles.imageContainer}>
                        <Text style={[styles.imageText, String(expenseStats?.netBalance).includes("-") ? styles.expenseText : styles.incomeText]}>{expenseStats?.netBalance}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={[styles.percentage, String(expenseStats?.netBalance).includes("-") ? styles.expenseText : styles.incomeText]}>Current</Text>
                        <Text style={[styles.percentage, String(expenseStats?.netBalance).includes("-") ? styles.expenseText : styles.incomeText]}>Balance</Text>
                    </View>
                </View>

                <View style={styles.section}>
                    <View style={styles.imageContainer}>
                        <Text style={styles.imageText}>{expenseStats?.totalIncome}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={[styles.percentage, styles.incomeText]}>{expenseStats?.incomePercentage}%</Text>
                        <Text style={styles.label}>Income</Text>
                    </View>
                </View>

                <View style={styles.section}>
                    <View style={styles.imageContainer}>
                        <Text style={styles.imageText}>{expenseStats?.totalExpense}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={[styles.percentage, styles.expenseText]}>{expenseStats?.expensePercentage}%</Text>
                        <Text style={styles.label}>Expense</Text>
                    </View>
                </View>

                {
                    (Array.isArray(userData?.settings?.expenseTrackService?.transactionType) && 
                    userData?.settings?.expenseTrackService?.transactionType.includes("borrowed")) &&
                    <View style={styles.section}>
                        <View style={styles.imageContainer}>
                            <Text style={styles.imageText}>{expenseStats?.totalBorrowed}</Text>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={[styles.percentage, styles.borrowedText]}>{expenseStats?.borrowedPercentage > 0 ? "+" : ""}{expenseStats?.borrowedPercentage}%</Text>
                            <Text style={styles.label}>Borrowed</Text>
                        </View>
                    </View>
                }
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    transactionOverview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
        gap: 10,
        width: 480,
    },
    section: {
        flex: 2,
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        justifyContent: "center",

        padding: 10,
        backgroundColor: '#f8f9fa',
        borderRadius: 10,
        elevation: 5,
    },

    // Image Container...
    imageContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#d9e2ec',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageText: {
        fontSize: 12,
        padding: 10,
        color: '#6c757d',
        fontWeight: '600',
        textAlign: "center",
    },

    // Text Container...
    textContainer: {
        alignItems: 'center',
        width: 60,
    },
    percentage: {
        fontSize: 13,
        fontWeight: 'bold',

    },
    label: {
        fontSize: 14,
        color: '#6c757d',
        marginTop: 4,
        width: 100,
        textAlign: "center",
    },
    incomeText: {
        color: '#28a745',
    },
    expenseText: {
        color: '#dc3545',
    },
    borrowedText: {
        color: 'orange',
    },
});