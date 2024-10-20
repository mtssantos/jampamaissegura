import React, { useEffect, useState } from "react";
import { Container, DateInput, FormContainer, Header, Label, Select, Separator, SubmitButton, TextArea, TimeInput, TimeRow, Title, TextSubmit, DateButton, ButtonText, TimeContainer, TimeButton, TimePickerContainer, DatePickerContainer, MapContainer, CheckBoxContainer, CheckBoxLabel, CustomCheckbox, CheckboxText } from "./styles";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Alert, Platform } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import Checkbox from "expo-checkbox";
import { useNavigation } from "@react-navigation/native";

const NewReport = () => {
    const navigation = useNavigation<any>();
    const [occurrenceType, setOccurrenceType] = useState('theft');
    const [details, setDetails] = useState('');
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [startTime, setStartTime] = useState(new Date());
    const [endTime, setEndTime] = useState(new Date());

    const [showStartTimePicker, setShowStartTimePicker] = useState(false);
    const [showEndTimePicker, setShowEndTimePicker] = useState(false);
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
    

    const onChangeStartTime = (event, selectedTime) => {
        const currentTime = selectedTime || startTime;
        setShowStartTimePicker(Platform.OS === 'ios');
        setStartTime(currentTime);
      };
    
      const onChangeEndTime = (event, selectedTime) => {
        const currentTime = selectedTime || endTime;
        setShowEndTimePicker(Platform.OS === 'ios');
        setEndTime(currentTime);
      };
  
    const handleSubmit = () => {
      console.log({
        occurrenceType,
        details,
        date,
        startTime,
        endTime,
        location: region,
        termsAccepted: isChecked
      });

      navigation.navigate("Home");
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
                    placeholder="Descreva os detalhes da ocorrência"
                    value={details}
                    onChangeText={(text) => setDetails(text)}
                    placeholderTextColor="#fff"
                />

                <Label>Informe a data do Ocorrido:</Label>
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

                <Label>Informe o horário de início e término:</Label>

                <TimeContainer> 
                    <TimeButton onPress={() => setShowStartTimePicker(true)}>
                        <ButtonText>{`${startTime.getHours()}:${(startTime.getMinutes() < 10 ? '0' : '') + startTime.getMinutes()}`}</ButtonText>
                    </TimeButton>


                    <TimeButton onPress={() => setShowEndTimePicker(true)}>
                        <ButtonText>{`${endTime.getHours()}:${(endTime.getMinutes() < 10 ? '0' : '') + endTime.getMinutes()}`}</ButtonText>
                    </TimeButton>
                </TimeContainer>
                <TimePickerContainer>
                    {showStartTimePicker && (
                            <DateTimePicker
                                value={startTime}
                                mode="time"
                                display="default"
                                onChange={onChangeStartTime}
                                is24Hour={true}
                                themeVariant="dark"
                                textColor="white"
                            />
                    )}

                    {showEndTimePicker && (
                        <DateTimePicker
                            value={endTime}
                            mode="time"
                            display="default"
                            onChange={onChangeEndTime}
                            is24Hour={true}
                            themeVariant="dark"
                            textColor="white"
                        />
                    )}
                </TimePickerContainer>
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