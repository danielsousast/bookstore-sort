import React, { useCallback } from "react";
import ReactNativeModal from "react-native-modal";
import * as S from "./ModalSort.styles";
import { SortOption } from "./SortOption/SortOption";
import { Button } from "../Button/Button";
import { BookSortBy, BookSortOrder } from "@/data";
import { useAppSafeArea } from "@/presentation/hooks/useAppSafeArea";

interface Props {
  onClose: () => void;
  isVisible: boolean;
  onSubmit: (sortBy: BookSortBy, sortOrder: BookSortOrder) => void;
}

export function ModalSort({ onClose, isVisible, onSubmit }: Props) {
  const { bottom } = useAppSafeArea();
  const [sortBy, setSortby] = React.useState<BookSortBy>(null);
  const [sortOrder, setSortOrder] = React.useState<BookSortOrder>(null);

  function handleSelectAtribute(option: BookSortBy) {
    setSortby(option);
  }

  const handleSelectSortOder = useCallback((option: BookSortOrder) => {
    setSortOrder(option);
  }, []);

  const handleApply = useCallback(() => {
    if (sortBy && sortOrder) {
      onSubmit(sortBy, sortOrder);
    }

    onClose();
  }, [sortBy, sortOrder, onSubmit]);

  return (
    <ReactNativeModal
      isVisible={isVisible}
      onModalHide={onClose}
      onBackdropPress={onClose}
      onDismiss={onClose}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      swipeDirection={["down"]}
      animationInTiming={500}
      animationOutTiming={500}
      backdropTransitionInTiming={500}
      backdropTransitionOutTiming={500}
      style={{ margin: 0, justifyContent: "flex-end" }}
    >
      <S.ModalContent
        style={{
          paddingBottom: bottom,
        }}
      >
        <S.SortText>Ordenar por</S.SortText>
        <SortOption
          option="Título"
          icon="book"
          isSelected={sortBy === "title"}
          onPress={() => handleSelectAtribute("title")}
        />
        <SortOption
          option="Autor"
          icon="person"
          isSelected={sortBy === "author"}
          onPress={() => handleSelectAtribute("author")}
        />
        <SortOption
          icon="calendar"
          option="Ano edição"
          isSelected={sortBy === "editionYear"}
          onPress={() => handleSelectAtribute("editionYear")}
        />
        <S.SortText
          style={{
            marginTop: 20,
          }}
        >
          Direção de ordenação
        </S.SortText>
        <S.SortOptionWrapper>
          <SortOption
            option="Crescente"
            isSelected={sortOrder === "ascending"}
            size="small"
            icon="sort-asc"
            onPress={() => handleSelectSortOder("ascending")}
          />
          <SortOption
            option="Decrescente"
            isSelected={sortOrder === "descending"}
            size="small"
            icon="sort-desc"
            onPress={() => handleSelectSortOder("descending")}
          />
        </S.SortOptionWrapper>
        <Button title="Aplicar" onPress={handleApply} />
      </S.ModalContent>
    </ReactNativeModal>
  );
}
