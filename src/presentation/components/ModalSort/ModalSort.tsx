import React from "react";
import ReactNativeModal, { ModalProps } from "react-native-modal";
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
  onSubmit: (filters: string[]) => void;
}

interface Filter {
  slug: string;
  display: string;
}

export function ModalSort({ onClose, isVisible, onSubmit }: Props) {
  const [selectedSortRules, setSelectedSortRules] = React.useState<Filter[]>(
    [] as Filter[]
  );

  function handleToggleFilter(filter) {
    if (selectedSortRules.includes(filter)) {
      const updatedRules = selectedSortRules.filter(
        (selectedRule) => selectedRule !== filter
      );
      setSelectedSortRules(updatedRules);
    } else {
      setSelectedSortRules([...selectedSortRules, filter]);
    }
  }

  function isFilterSelected(filter) {
    return selectedSortRules.some(
      (selectedFilter) => selectedFilter.slug === filter.slug
    );
  }

  function handleApplyFilters() {
    const selectedSortRulesSlugs = selectedSortRules.map(
      (option) => option.slug
    );
    onSubmit(selectedSortRulesSlugs);
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
        {SORT_OPTIONS.map((filter) => (
          <SortOption
            key={filter.slug}
            filter={filter}
            isSelected={isFilterSelected(filter)}
            onPress={() => handleToggleFilter(filter)}
          />
        ))}
        <Button title="Aplicar" onPress={handleApplyFilters} />
      </S.ModalContent>
    </ReactNativeModal>
  );
}
