import React, { useEffect, useState } from "react";
import { Container, FormContainer, Header, Label, Select, Separator, SubmitButton, TextArea, Title, TextSubmit, DateButton, ButtonText, TimeButton, MapContainer, CheckBoxContainer, CheckBoxLabel, CustomCheckbox, CheckboxText, DateTimePickerContainer, DatePickerContainer, TimePickerContainer, Input } from "./styles";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Alert, Platform } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import Checkbox from "expo-checkbox";
import { useNavigation } from "@react-navigation/native";

const NewReport = () => {
    const navigation = useNavigation<any>();
    const [occurrenceType, setOccurrenceType] = useState('Roubo');
    const [details, setDetails] = useState('');
    const [vehicle, setVehicle] = useState('');
    const [weapon, setWeapon] = useState('');
    const [individuals, setIndividuals] = useState('');
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [time, setTime] = useState(new Date());

    const [showTimePicker, setShowTimePicker] = useState(false);
    const [region, setRegion] = useState({
        latitude: -7.11532,
        longitude: -34.861,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Permissão de localização negada', 'Não foi possível acessar a localização atual.');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setRegion({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            });
        })();
    }, []);

    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(Platform.OS === 'ios');
        setDate(currentDate);
    };
    

    const onChangeTime = (event, selectedTime) => {
        const currentTime = selectedTime || time;
        setShowTimePicker(Platform.OS === 'ios');
        setTime(currentTime);
    };

    const formatDateTime = (date: Date, time: Date) => {
        const datePart = date.toISOString().split('T')[0];

        const timePart = time.toTimeString().split(' ')[0];

        return{
            dateInfo: datePart,
            timeInfo: timePart
        }
    }

    const { dateInfo, timeInfo } = formatDateTime(date, time);
  
    const handleSubmit = () => {
      console.log({
        "crime_type": occurrenceType,
        "observations": details,
        "date": dateInfo,
        "time": timeInfo,
        "vehicle_description": vehicle,
        "weapon_type": weapon,
        "number_of_individuals": individuals,
        latitude: region.latitude,
        longitude: region.longitude,
        termsAccepted: isChecked
      });

      navigation.navigate("ConfirmReport");
    };

    return(
        <Container>
            <Header>
                <Title>Registrar Ocorrência</Title>
            </Header>
            <Separator />
            <FormContainer>
                <Label>Informe o tipo de Ocorrência:</Label>
                {Platform.OS === 'ios' ? (
                    <Picker
                        selectedValue={occurrenceType}
                        onValueChange={(itemValue) => setOccurrenceType(itemValue)}
                    >
                        <Picker.Item label="Roubo" value="Roubo" color="white" />
                        <Picker.Item label="Assalto" value="Assalto" color="white" />
                        <Picker.Item label="Vandalismo" value="Vandalismo" color="white" />
                        <Picker.Item label="Outros" value="Outros" color="white" />
                    </Picker>
                    ) : (
                    <Select
                        selectedValue={occurrenceType}
                        onValueChange={(itemValue) => setOccurrenceType(itemValue)}
                        dropdownIconColor="white"
                        mode="dropdown"
                    >
                        <Picker.Item label="Roubo" value="Roubo" />
                        <Picker.Item label="Assalto" value="Assalto" />
                        <Picker.Item label="Vandalismo" value="Vandalismo" />
                        <Picker.Item label="Outros" value="Outros" />
                    </Select>
                    )}

                <Label>Informe os detalhes da Ocorrência:</Label>
                <TextArea
                    multiline
                    numberOfLines={5}
                    placeholder="Descreva os detalhes da ocorrência..."
                    value={details}
                    onChangeText={(text) => setDetails(text)}
                    placeholderTextColor="#b4b4b4"
                />

                <Label>Informe o tipo de veículo utilizado:</Label>
                <Input placeholder="Descreva como foi a locomoção dos indivíduos..." 
                    value={vehicle} 
                    placeholderTextColor={"#b4b4b4"} 
                    onChangeText={(text) => setVehicle(text)}
                />

                <Label>Qual foi o tipo de arma utilizado:</Label>
                <Input placeholder="Descreva o tipo de arma utilizado..." 
                    value={weapon} 
                    placeholderTextColor={"#b4b4b4"} 
                    onChangeText={(text) => setWeapon(text)}
                />

                <Label>Informe a quantidade de indivíduos</Label>
                <Input placeholder="Descreva quantos indivíduos tinha na ocorrência..." 
                    value={individuals} 
                    placeholderTextColor={"#b4b4b4"} 
                    onChangeText={(text) => setIndividuals(text)}
                />

                <Label>Informe a data e hora do Ocorrido:</Label>
                <DateTimePickerContainer>
                    <DateButton onPress={() => setShowDatePicker(true)}>
                        <ButtonText>{date.toLocaleDateString()}</ButtonText>
                    </DateButton>
                    <DatePickerContainer>
                        {showDatePicker && (
                            <DateTimePicker
                                value={date}
                                mode="date"
                                display="default"
                                locale="pt-BR"
                                onChange={onChangeDate}
                                themeVariant="dark"
                            />
                        )}
                    </DatePickerContainer>
                    <TimeButton onPress={() => setShowTimePicker(true)}>
                        <ButtonText>{`${time.getHours()}:${(time.getMinutes() < 10 ? '0' : '') + time.getMinutes()}`}</ButtonText>
                    </TimeButton>
                    <TimePickerContainer>
                        {showTimePicker && (
                                <DateTimePicker
                                    value={time}
                                    mode="time"
                                    display="default"
                                    onChange={onChangeTime}
                                    is24Hour={true}
                                    themeVariant="dark"
                                    textColor="white"
                                />
                        )}
                    </TimePickerContainer>
                </DateTimePickerContainer>

                <Label>Selecione o local da ocorrência no mapa:</Label>
                <MapContainer>
                    <MapView
                        style={{ width: '100%', height: 200 }}
                        region={region}
                        onRegionChangeComplete={(newRegion) => setRegion(newRegion)}
                        onPress={(e) => {
                            const { latitude, longitude } = e.nativeEvent.coordinate;
                            setRegion({ ...region, latitude, longitude });
                        }}
                    >
                        <Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} />
                    </MapView>
                </MapContainer>

                <Label>Você leu e concorda com os termos de responsabilidade e confidencialidade:</Label>
                <CheckBoxContainer>
                    <Checkbox
                        value={isChecked}
                        onValueChange={setIsChecked}
                    />
                    <CheckBoxLabel>Eu li e aceito os termos</CheckBoxLabel>
                </CheckBoxContainer>

                <SubmitButton
                    onPress={handleSubmit}
                    disabled={!isChecked} 
                >
                    <TextSubmit>Registrar Ocorrência</TextSubmit>
                </SubmitButton>
            </FormContainer>
        </Container>
    );
}


export default NewReport;