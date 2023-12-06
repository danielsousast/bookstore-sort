import React from "react";
import ReactNativeModal from "react-native-modal";
import * as S from "./ModalSort.styles";
import { SortOption } from "./SortOption/SortOption";
import { Button } from "../Button/Button";

const SORT_OPTIONS = [
  {
    slug: "title-ascending",
    display: "Título (A-Z)",
  },
  {
    slug: "title-descending",
    display: "Título (Z-A)",
  },
  {
    slug: "author-ascending",
    display: "Autor (A-Z)",
  },
  {
    slug: "author-descending",
    display: "Autor (Z-A)",
  },
  {
    slug: "edition-ascending",
    display: "Edição (crescente)",
  },
  {
    slug: "edition-descending",
    display: "Edição (decrescente)",
  },
];

interface Props {
  onClose: () => void;
  isVisible: boolean;
  onSubmit: (filters: string) => void;
}

interface Option {
  slug: string;
  display: string;
}

export function ModalSort({ onClose, isVisible, onSubmit }: Props) {
  const [selectedSortRule, setSelectedSortRule] = React.useState<Option>(null);

  function handleToggle(option) {
    if (selectedSortRule?.slug === option.slug) {
      setSelectedSortRule(null);
      return;
    }
    setSelectedSortRule(option);
  }

  function isOptionSelected(option) {
    return selectedSortRule?.slug === option.slug;
  }

  function handleApply() {
    onSubmit(selectedSortRule?.slug);
    onClose();
  }

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
      <S.ModalContent>
        {SORT_OPTIONS.map((option) => (
          <SortOption
            key={option.slug}
            option={option}
            isSelected={isOptionSelected(option)}
            onPress={() => handleToggle(option)}
          />
        ))}
        <Button title="Aplicar" onPress={handleApply} />
      </S.ModalContent>
    </ReactNativeModal>
  );
}
