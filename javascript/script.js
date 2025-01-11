const model_names = [
    {
        src: "models/Baby_Rest_Amara_Cot_Beech_Static_c.glb",
        alt: "Model 1"
    },
    {
        src: "models/Baby_Rest_Apollo_Cot_Static_c.glb",
        alt: "Model 2"
    },
    {
        src: "models/Baby_Rest_Beckett_Cot_Static_Teak_c.glb",
        alt: "Model 3"
    },
    {
        src: "models/Baby_Rest_Beckett_Cot_Static_White_c.glb",
        alt: "Model 3.1"
    },
    {
        src: "models/Baby_Rest_Chest_3_Drawer_Static_c.glb",
        alt: "Model 4"
    },
    {
        src: "models/Babybed_HAJO_As_a_side_baby_Static_Nature_c.glb",
        alt: "Model 5"
    },
    {
        src: "models/Babybed_HAJO_As_a_side_baby_Static_White_c.glb",
        alt: "Model 5.1"
    },
    {
        src: "models/Babybed_HAJO_Child_bed_without_the_3_rungs_Static_Nature_c.glb",
        alt: "Model 6"
    },
    {
        src: "models/Babybed_HAJO_Child_bed_without_the_3_rungs_Static_White_c.glb",
        alt: "Model 6.1"
    },
    {
        src: "models/Babybed_HAJO_Regular_Baby_Bed_Static_Nature_c.glb",
        alt: "Model 7"
    },
    {
        src: "models/Babybed_HAJO_Regular_Baby_Bed_Static_White_c.glb",
        alt: "Model 7.1"
    },
    {
        src: "models/Babyhood_Petal_Swing_Static_c.glb",
        alt: "Model 8"
    },
    {
        src: "models/Babyhood_Petal_Swing_Toys_Static_c.glb",
        alt: "Model 8.1"
    },
    {
        src: "models/Babyhood_Riya_Cot_Septum_Static_Gray_c.glb",
        alt: "Model 9"
    },
    {
        src: "models/Babyhood_Riya_Cot_Septum_Static_White_c.glb",
        alt: "Model 9.1"
    },
    {
        src: "models/Babyhood_Riya_Cot_Small_Septum_Static_Gray_c.glb",
        alt: "Model 10"
    },
    {
        src: "models/Babyhood_Riya_Cot_Small_Septum_Static_White_c.glb",
        alt: "Model 10.1"
    },
    {
        src: "models/Babyhood_Riya_Cot_Static_Gray_c.glb",
        alt: "Model 11"
    },
    {
        src: "models/Babyhood_Riya_Cot_Static_White_c.glb",
        alt: "Model 11.1"
    },
    {
        src: "models/Babyhood_Riya_Cot_Without_Septum_Static_Gray_c.glb",
        alt: "Model 12"
    },
    {
        src: "models/Babyhood_Riya_Cot_Without_Septum_Static_White_c.glb",
        alt: "Model 12.1"
    },
    {
        src: "models/Bebe_Jou_Bath_Sense_Edititon_Static_Breeze_Green_c.glb",
        alt: "Model 13"
    },
    {
        src: "models/Bebe_Jou_Bath_Sense_Edititon_Static_Celestial_Blue_c.glb",
        alt: "Model 13.1"
    },
    {
        src: "models/Bebe_Jou_Bath_Sense_Edititon_Static_Copper_c.glb",
        alt: "Model 13.2"
    },
    {
        src: "models/Bebe_Jou_Bath_Sense_Edititon_Static_Griffin_Grey_c.glb",
        alt: "Model 13.3"
    },
    {
        src: "models/Bebe_Jou_Bath_Sense_Edititon_Static_Light_Grey_c.glb",
        alt: "Model 13.4"
    },
    {
        src: "models/Bebe_Jou_Bath_Sense_Edititon_Static_Mellow_Rose_c.glb",
        alt: "Model 13.3"
    },
    {
        src: "models/Bebe_Jou_Bath_Sense_Edititon_Static_Ocean_Green_c.glb",
        alt: "Model 13.5"
    },
    {
        src: "models/Bebe_Jou_Bath_Sense_Edititon_Static_Pale_Pink_c.glb",
        alt: "Model 13.6"
    },
    {
        src: "models/Bebe_Jou_Bath_Sense_Edititon_Static_Sky_Green_c.glb",
        alt: "Model 13.7"
    },
    {
        src: "models/Bebe_Jou_Bath_Sense_Edititon_Static_Taupe_c.glb",
        alt: "Model 13.8"
    },
    {
        src: "models/Bebe_Jou_Bath_Sense_Edititon_Static_White_c.glb",
        alt: "Model 13.9"
    },
    {
        src: "models/BordeauxCot_Static_JuniorBed_Ash_c.glb",
        alt: "Model 14"
    },
    {
        src: "models/BordeauxCot_Static_Regular_Ash_c.glb",
        alt: "Model 15"
    },
    {
        src: "models/HALO360_Forest_Static_c.glb",
        alt: "Model 16"
    },
    {
        src: "models/HALO360_Ink_Static_c.glb",
        alt: "Model 16.1"
    },
    {
        src: "models/HALO360_Midnight_Static_c.glb",
        alt: "Model 16.2"
    },
    {
        src: "models/HALO360_Onyx_Static_c.glb",
        alt: "Model 16.3"
    },
    {
        src: "models/Lernturm_Felix_Tower_Basic_Static_Wood_Black_c.glb",
        alt: "Model 17"
    },
    {
        src: "models/Lernturm_Felix_Tower_Basic_Static_Wood_Blue_c.glb",
        alt: "Model 17.1"
    },
    {
        src: "models/Lernturm_Felix_Tower_Basic_Static_Wood_Gray_c.glb",
        alt: "Model 17.2"
    },
    {
        src: "models/Lernturm_Felix_Tower_Basic_Static_Wood_Hazy_Gray_c.glb",
        alt: "Model 17.3"
    },
    {
        src: "models/Lernturm_Felix_Tower_Basic_Static_Wood_Mint_c.glb",
        alt: "Model 17.4"
    },
    {
        src: "models/Lernturm_Felix_Tower_Basic_Static_Wood_Nature_c.glb",
        alt: "Model 17.5"
    },
    {
        src: "models/Lernturm_Felix_Tower_Basic_Static_Wood_Oak_c.glb",
        alt: "Model 17.6"
    },
    {
        src: "models/Lernturm_Felix_Tower_Basic_Static_Wood_Rose_c.glb",
        alt: "Model 17.7"
    },
    {
        src: "models/Lernturm_Felix_Tower_Basic_Static_Wood_Storm_Gray_c.glb",
        alt: "Model 17.8"
    },
    {
        src: "models/Lernturm_Felix_Tower_Basic_Static_Wood_White_c.glb",
        alt: "Model 17.9"
    },
    {
        src: "models/Lernturm_Felix_Tower_Basic_Static_Wood_Yellow_c.glb",
        alt: "Model 17.10"
    },
    {
        src: "models/Lernturm_Felix_Tower_Basic_Wider_Static_Wood_Nature_c.glb",
        alt: "Model 17.11"
    },
    {
        src: "models/Lernturm_Felix_Tower_Static_Wood_Black_c.glb",
        alt: "Model 18"
    },
    {
        src: "models/Lernturm_Felix_Tower_Static_Wood_Blue_c.glb",
        alt: "Model 18.1"
    },
    {
        src: "models/Lernturm_Felix_Tower_Static_Wood_Gray_c.glb",
        alt: "Model 18.2"
    },
    {
        src: "models/Lernturm_Felix_Tower_Static_Wood_Hazy_Gray_c.glb",
        alt: "Model 18.3"
    },
    {
        src: "models/Lernturm_Felix_Tower_Static_Wood_Mint_c.glb",
        alt: "Model 18.4"
    },
    {
        src: "models/Lernturm_Felix_Tower_Static_Wood_Nature_c.glb",
        alt: "Model 18.5"
    },
    {
        src: "models/Lernturm_Felix_Tower_Static_Wood_Oak_c.glb",
        alt: "Model 18.6"
    },
    {
        src: "models/Lernturm_Felix_Tower_Static_Wood_Rose_c.glb",
        alt: "Model 18.7"
    },
    {
        src: "models/Lernturm_Felix_Tower_Static_Wood_Storm_Gray_c.glb",
        alt: "Model 18.8"
    },
    {
        src: "models/Lernturm_Felix_Tower_Static_Wood_White_c.glb",
        alt: "Model 18.9"
    },
    {
        src: "models/Lernturm_Felix_Tower_Static_Wood_Yellow_c.glb",
        alt: "Model 18.10"
    },
    {
        src: "models/Lovencare_Bordeaux_Chest_Ash_Static_Ash_c.glb",
        alt: "Model 19"
    },
    {
        src: "models/Mack_Truck_Bulldog_Static_Green_c.glb",
        alt: "Model 20"
    },
    {
        src: "models/Mack_Truck_Bulldog_Static_Red_c.glb",
        alt: "Model 20.1"
    },
    {
        src: "models/Mack_Truck_Dog_Static_Coral_Red_c.glb",
        alt: "Model 20.2"
    },
    {
        src: "models/Mack_Truck_Dog_Static_Light_Blue_c.glb",
        alt: "Model 20.3"
    },
    {
        src: "models/Mack_Truck_Dog_Static_Light_Green_c.glb",
        alt: "Model 20.4"
    },
    {
        src: "models/Mack_Truck_Lines_Static_Brown_c.glb",
        alt: "Model 20.5"
    },
    {
        src: "models/Mack_Truck_Lines_Static_Dark_Blue_c.glb",
        alt: "Model 20.6"
    },
    {
        src: "models/Mack_Truck_Lines_Static_Grey_c.glb",
        alt: "Model 20.7"
    },
    {
        src: "models/Maxi-Cosi_Iora_Essential_Graphite_Static_Blue_c.glb",
        alt: "Model 21"
    },
    {
        src: "models/SEBRA_BED_Static_BirchbarkRose_c.glb",
        alt: "Model 22"
    },
    {
        src: "models/SEBRA_BED_Static_ForestLakeBlue_c.glb",
        alt: "Model 22.1"
    },
    {
        src: "models/SEBRA_BED_Static_MistGreen_c.glb",
        alt: "Model 22.1"
    },
    {
        src: "models/SEBRA_BED_Static_WoodenEdition_c.glb",
        alt: "Model 22.1"
    },
    {
        src: "models/Tasman_Eco_Willow_Cot_Bed_Higher_Static_Sandstone_c.glb",
        alt: "Model 23"
    },
    {
        src: "models/Tasman_Eco_Willow_Cot_No_Side_Static_Sandstone_c.glb",
        alt: "Model 24"
    },
    {
        src: "models/Tasman_Eco_Willow_Cot_Static_Sandstone_c.glb",
        alt: "Model 25"
    },
    {
        src: "models/Tasman_Eco_Willow_Drawer_Chest_Static_Sandstone_c.glb",
        alt: "Model 26"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    generateSliderItems();
});

function generateSliderItems() {
    const container = document.getElementById("model-slider");

    model_names.forEach((model) => {
        if (model.alt.includes(".")) {
            return;
        }

        const sliderItem = document.createElement("div");
        sliderItem.className = "slider-item";

        sliderItem.setAttribute("onclick", `updateViewer('${model.src}', '${model.alt}')`);

        const modelViewer = document.createElement("model-viewer");
        modelViewer.setAttribute("src", model.src);
        modelViewer.setAttribute("alt", model.alt);
        modelViewer.setAttribute("disable-zoom", "");

        sliderItem.appendChild(modelViewer);
        container.appendChild(sliderItem);
    });
}

function updateViewer(modelSrc, modelAlt) {
    const viewer = document.getElementById("viewer");
    const varSlider = document.getElementById("var-slider");

    if (varSlider.classList.contains("open") && modelSrc === viewer.src) {
        varSlider.classList.remove("open");
        return;
    } else if (varSlider.classList.contains("open")) {
        varSlider.classList.remove("open");
    }

    viewer.src = modelSrc;

    for (let i = 0; i < model_names.length; i++) {
        if (model_names[i].alt.startsWith(modelAlt + ".")) {
            openVarSlider(i - 1, modelAlt);
            break;
        }
    }
}

function openVarSlider(index, modelAlt) {
    const varSlider = document.getElementById("var-slider");
    varSlider.innerHTML = '';
    varSlider.scrollTop = 0;
    varSlider.classList.add("open");

    for (let i = index; i < model_names.length; i++) {
        if (model_names[i].alt.startsWith(modelAlt)) {
            const varItem = document.createElement("div");
            varItem.className = "slider-item";

            varItem.setAttribute("onclick", `updateViewer('${model_names[i].src}', '${model_names[i].alt}')`);

            const modelViewer = document.createElement("model-viewer");
            modelViewer.setAttribute("src", model_names[i].src);
            modelViewer.setAttribute("alt", model_names[i].alt);
            modelViewer.setAttribute("disable-zoom", "");

            varItem.appendChild(modelViewer);
            varSlider.appendChild(varItem);
        } else {
            break;
        }
    }
}

function closeVarSlider() {
    const varSlider = document.getElementById("var-slider");
    varSlider.classList.remove("open");
}